<template>

    <div class="main">
        <section>
            <company :companyInfo="data" />

            <company_info :companyInfo="data" />

            <individual_shareholder v-for="shares in shareholders" :shareholder="shares" />

            <corporate_shareholder v-for="coshare in CorporateShareholder" :corporateShare="coshare" />

            <company_secretary />

            <individual_directors v-for="directors in IndividualDirectors" :director="directors" />

            <corporate_directors v-for="corporates in CorporateDirectors" :corporate="corporates" />

            <founder_statement :founder="founder" />

            <pi_ncc_secretary v-for="directors in IndividualDirectors" :director="directors" />

            <notice_to_business />
            <company_ordinance />
            <class_of_shares />
            <ownershipShares />
            <articles />
        </section>

    </div>

    <div class="off-screen" ref="PDFsection" hidden id="print_item">
        <company :companyInfo="data" />
        <company_info :companyInfo="data" />
        <!-- <individual_shareholder v-for="shares in shareholders" :shareholder="shares" /> -->
        <!-- <corporate_shareholder v-for="coshare in CorporateShareholder" :corporateShare="coshare" /> -->
        <!-- <company_secretary /> -->
        <!--      <individual_directors v-for="directors in IndividualDirectors" :director="directors" />
            <corporate_directors v-for="corporates in CorporateDirectors" :corporate="corporates" />
            <founder_statement :founder="founder"/>
            <pi_ncc_secretary v-for="directors in IndividualDirectors" :director="directors" />
            <notice_to_business />
            <company_ordinance />
            <class_of_shares /> 
        <ownershipShares /> -->
        <!-- <articles /> -->
        <!--    <articles_last /> -->

    </div>

    <div class="off-screen" ref="PDFsection2">

        <!-- <articles_last />   -->

    </div>

</template>

<script setup lang="ts">
import { useStartCompanyStore } from "../StartCompany/StartCompany_store";
import { ref, computed, onMounted, watch, reactive } from 'vue'

import company from './company.vue'
import company_info from './company_info.vue'
import individual_shareholder from './individual_shareholder.vue'
import corporate_shareholder from './corporate_shareholder.vue'
import company_secretary from './company_secretary.vue'
import individual_directors from './individual_directors.vue'
import corporate_directors from './corporate_directors.vue'
import founder_statement from './founder_statement.vue'
import pi_ncc_secretary from './pi_ncc_secretary.vue'
import notice_to_business from './notice_to_business.vue'
import company_ordinance from './company_ordinance.vue'
import class_of_shares from './class_of_shares.vue'
import ownershipShares from './ownershipShares.vue'
import articles from './articles.vue'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import api from '@/stores/Helpers/axios'
import { useToast } from 'vue-toast-notification';


const startCompanyStore = useStartCompanyStore();
const toast = useToast()

let data = startCompanyStore.companyInProgress

watch(() => startCompanyStore.pdfAction, () => {
    proceedToPayment()
})

const PDFsection = ref<any>(null);
const PDFsection2 = ref<any>(null);

const formData = new FormData()
const founder = reactive({
    founders_count: 0,
    founder_details: {
        name: '',
        signature: '',
        date: ''
    },
});

watch(() => startCompanyStore, () => { startCompanyStore.companyInProgress }, { deep: true });

function createPDF(canvas: any, index: any) {
    var doc = new jsPDF('p', 'mm');
    const maxPageWidth = doc.internal.pageSize.getWidth() - 10;
    const scaleFactor = maxPageWidth / canvas.width;
    const imgWidth = canvas.width * scaleFactor;
    // var pageHeight = 290;
    var pageHeight = 350;
    var imgHeight = canvas.height * imgWidth / canvas.width;
    var heightLeft = imgHeight;
    var position = 0;
    var pageData = canvas.toDataURL('image/jpeg', 1.0);
    var imgData = encodeURIComponent(pageData);

    doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    doc.setLineWidth(5);
    doc.setDrawColor(255, 255, 255);
    doc.rect(0, 0, 210, 295);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        doc.setLineWidth(5);
        doc.setDrawColor(255, 255, 255);
        doc.rect(0, 0, 210, 295);
        heightLeft -= pageHeight;
    }
    //  doc.save("companyInfo.pdf")
    const pdfBlob = doc.output('blob');
    formData.append(`documents[${index}]`, pdfBlob);
}

function proceedToPayment() {
    const promises = [];

    //@ts-ignore
    document.getElementById('print_item').hidden = false
    promises.push(html2canvas(PDFsection.value).then(canvas => {
        createPDF(canvas, 0);
    }));

    // promises.push(html2canvas(PDFsection2.value).then(canvas => {
    //     createPDF(canvas, 1);
    // }));

    Promise.all(promises).then(() => {
        formData.append('company_id', startCompanyStore.companyInProgress.id);
        formData.append('date_signed', startCompanyStore.signatureDateSigned);

        sendPDFToApi();
    });
}


async function sendPDFToApi() {
    try {
        const asas = await api.buildPDF(formData)
        startCompanyStore.pdfIsSending = false
        toast.success('Data Saved Successfully', { position: 'top-right' });
        //@ts-ignore
        document.getElementById('print_item').hidden = true
        startCompanyStore.switchStage('+')
        goToPaymentPage()
        // console.log(asas);
    } catch (error) {
        toast.error('Sorry, Something went wrong', { position: 'top-right' });
        startCompanyStore.pdfIsSending = false
        console.log(error);
    }
}



const shareholders = computed(() => {
    const individualShareholder = startCompanyStore.companyInProgress?.company_entity ?? [];
    const founders: any[] = [];
    let counts = 0
    // console.log(individualShareholder, 'individualShareholder')
    individualShareholder.forEach((shares: any) => {
        const obj = shares.individual;
        const fxs = individualShareholder.filter((t: any) => t.is_founder == 1)
        if (fxs.length > 0) {
            const fx = fxs[0];
            founder.founder_details.name = (fx.individual?.first_name ?? '' + fx.corporate?.authorized_persons?.first_name ?? '') + ' ' + (fx.individual?.last_name ?? '' + fx.corporate?.authorized_persons?.last_name ?? '') + ' ' + (fx.individual?.chn_last_name ?? '') + (fx.individual?.chn_first_name ?? '')
            founder.founder_details.signature = fx.signature
            founder.founder_details.date = fx.date_signed
        }

        let cp = shares.entity_capacity_id;
        if (obj && cp.includes(2)) {
            counts++
        }
        if (obj && cp.includes(1)) {
            obj.entity_type_id = shares.entity_type_id,
                obj.capacity = shares.entity_capacity_id
            obj.company_shares = startCompanyStore.companyInProgress?.shares
            founders.push(obj)
            //   console.log(counts, 'counts count');
        }
    })
    founder.founders_count = counts
    return founders;
})


const IndividualDirectors = computed(() => {
    const Directors = startCompanyStore.companyInProgress?.company_entity ?? [];
    const director: any[] = [];
    Directors.forEach((dir: any) => {
        const obj = dir.individual;
        //   console.log(dir, "true")
        let cp = dir.entity_capacity_id;
        if (obj && cp.includes(2)) {
            obj.entity_type_id = dir.entity_type_id,
                obj.capacity = dir.entity_capacity_id
            obj.address = obj.cor_address ?? obj.res_address
            obj.signature = dir.signature ?? ''
            director.push(obj)
        }
    })

    return director;
})


const CorporateDirectors = computed(() => {
    const CorporateD = startCompanyStore.companyInProgress?.company_entity ?? [];
    const Corporate: any[] = [];
    CorporateD.forEach((cdir: any) => {
        const objs = cdir.corporate;
        let cps = cdir.entity_capacity_id;
        if (objs && cps.includes(2)) {
            objs.entity_type_id = cdir.entity_type_id,
                objs.capacity = cdir.entity_capacity_id
            objs.signature = cdir.signature ?? ''
            Corporate.push(objs)
            //   console.log(Corporate, 'corporate list')
            // founders_counts.value + 1
        }
    })
    return Corporate;
})


const CorporateShareholder = computed(() => {
    const ShareholderC = startCompanyStore.companyInProgress?.company_entity ?? [];
    const sh: any[] = [];
    ShareholderC.forEach((dt: any) => {
        const ob = dt.corporate;
        let cps = dt.entity_capacity_id;
        if (ob && cps.includes(1)) {
            ob.entity_type_id = dt.entity_type_id,
                ob.capacity = dt.entity_capacity_id
            ob.company_shares = startCompanyStore.companyInProgress?.shares
            sh.push(ob)
            //   console.log(sh)
        }
    })

    return sh;
})



const goToPaymentPage = async () => {
    try {
        const { data } = await api.paymentIntent()
        if (data.original?.error) {
            toast.error('Sorry, Something went wrong', { position: 'top-right' });
            return
        }
        window.location.href = data.original
    } catch (error) {
        console.log(error)
    }
}
</script>

<style scoped>
@import '@/assets/pdf.css';

.off-screen {
    position: absolute;
    left: -9999px;
    top: -9999px;

    /* visibility: hidden; */
}
</style>
