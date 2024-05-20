<template>
  <StartCompany_template>
    <template #main>
      <section class="section">
        <div class="fw-bolder fs-5">Founders / Directors
          <span v-if="startCompanyStore.isShowingFoundersForm && startCompanyStore.idToEdit"
            class="text-primary small fst-italic">(editing...)</span>
        </div>
        <span>Tell us the details about the founder and director.</span>
      </section>
      <div v-if="!startCompanyStore.isShowingFoundersForm">
        <label for="CompanyStore" class="section" style="width:100%;">
          <!-- <section class="section"> -->
          <div class="card " style="
            display: flex;
            align-items: center;
            height: 60px;
            background: #cfe2ff;
            padding: 10px;
            
          ">
            <button class="btn btn-outline-none" id="CompanyStore" @click="openForm">
              <i class="bi bi-plus-circle"></i> Add New founder / Director
            </button>
          </div>
          <!-- </section> -->
        </label>
        <section v-if="foundersAdded.length" class="section">
          <div class="card" style="width: 100%">
            <div class="card-header" style="background: #cfe2ff">Founders / Directors </div>
            <div class="table-responsive">
              <table class="table table-sm ">
                <tbody>
                  <tr v-for="item in foundersAdded" :key="item">
                    <i class="bi bi-person-circle" style="font-size:20px; padding-left:20px"></i>
                    <td class="text-capitalize " v-if="item.entity_type_id == 1">
                      {{ item.first_name + " " + item.last_name }} <br>
                      <small> {{ item.capacity.includes('1') ? 'Shareholder' : '' }}</small>
                      {{ item.capacity.length > 1 ? " " : " " }}
                      <small> {{ item.capacity.includes('2') ? 'Director' : ' ' }}</small>

                    </td>
                    <td v-else class="text-capitalize">
                      {{ item.company_name }} <br>
                      <small> {{ item.capacity.includes('1') ? 'Shareholder' : ' ' }}</small>
                      <small> {{ item.capacity.includes('2') ? ' Director' : ' ' }} </small>
                    </td>
                    <td class="text">
                      {{ item.entity_type_id == "1" ? "Individual" : "Corporate" }}
                    </td>
                    <td>
                      <button @click="editFounder(item)" class="btn btn-sm border-0 text-info p-0 m-0">
                        <i class="bi bi-pencil"></i> Edit
                      </button>
                    </td>
                    <td>
                      <button @click="deleteFounder(item.company_entity_id)"
                        class="btn border-0 btn-sm text-danger p-0 m-0">
                        <i class="bi bi-trash3"></i> Remove
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <button @click="moveBack" class="btn btn-outline-dark me-3">
          <i class="bi bi-arrow-left"></i> Back
        </button>
        <button @click="saveAndContinue" class="btn btn-primary">
          Continue <i class="bi bi-arrow-right"></i>
        </button>
      </div>

      <div v-else>
        <!-- <button  v-if="founderType == 'individual' || founderType == 'corporate'"  @click="closeForm" class="btn btn-outline-primary float-end btn-sm"> Clear Form</button> -->
        <section class="section">
          <div class="fw-bold">What is the type of founder/director? </div>

          <div class="row justify-content- mt-1">
            <div @click="founderType = 'individual'" class="col-4 cursor-pointer"
              :class="{ 'pointer-events-none': startCompanyStore.idToEdit }">
              <i v-if="founderType == 'individual'" class="bi bi-record-circle-fill text-primary me-1"></i>
              <i v-else class="bi bi-circle me-1"></i>
              Individual
            </div>

            <div @click="founderType = 'corporate'" class="col-4 cursor-pointer"
              :class="{ 'pointer-events-none': startCompanyStore.idToEdit }">
              <i v-if="founderType == 'corporate'" class="bi bi-record-circle-fill text-primary me-1"></i>
              <i v-else class="bi bi-circle me-1"></i>
              Corporate
            </div>
          </div>
        </section>

        <section class="section">
          <div class="fw-bold">What is the Capacity of this individual? </div>
          <div class="row justify-content- mt-1">
            <div class="col-4 ">
              <div class="form-check ">
                <input v-model="startCompanyStore.checkedEntityCapacity" class="form-check-input cursor-pointer"
                  type="checkbox" id="shareholder" value="1" />
                <label class="form-check-label" for="shareholder">Shareholder</label>
              </div>
            </div>

            <div class="col-4 ">
              <div class="form-check ">
                <input class="form-check-input" type="checkbox" id="director" value="2"
                  v-model="startCompanyStore.checkedEntityCapacity" />
                <label class="form-check-label" for="director">Director</label>
              </div>
            </div>
          </div>
        </section>

    
        <Founders_individual v-if="founderType == 'individual'" />
        <Founders_corporate v-else-if="founderType == 'corporate'" />
        <div class="p-2" v-else></div>
      </div>


    </template>


    <template #info>
      <!-- <section class="section" v-if="foundersAdded.length">
        <div class="card small">
          <div class="card-header border-0">
            FOUNDERS ADDED

            <span class="badge rounded-pill text-bg-warning small">{{
              foundersAdded.length
            }}</span>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-sm">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in foundersAdded" :key="item">
                    <td class="text-capitalize" v-if="item.entity_type_id == 1">
                      {{ item.first_name + " " + item.last_name }}
                    </td>
                    <td v-else class="text-capitalize">
                      {{ item.company_name }}
                    </td>
                    <td class="text">
                      {{
                        item.entity_type_id == "1" ? "Individual" : "Corporate"
                      }}
                    </td>
                    <td>
                      <button
                        class="btn btn-link btn-sm border-0 text-info p-0 m-0"
                      >
                        <i class="bi bi-pencil"></i>
                      </button>
                    </td>
                    <td>
                      <button
                        @click="deleteFounder(item.company_entity_id)"
                        class="btn btn-link border-0 btn-sm text-danger p-0 m-0"
                      >
                        <i class="bi bi-x-lg"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section> -->

      <section class="section">
        <div class="fw-bold">
          What are the basic requirements to be a founder?
        </div>
        <div>
          A founder must be at least 18 years old. There is no residency
          requirement to be a founder, and our form allows for up to 6 founders
          to be registered.
        </div>
      </section>
      <section class="section">
        <div class="fw-bold">
          Is it possible to change founder details after the company has been
          incorporated?
        </div>
        <div>
          Yes, amendments to founder details can be made post-incorporation.
        </div>
      </section>
      <section class="section">
        <div class="fw-bold">
          Is it possible to change founder details after the company has been
          incorporated?
        </div>
        <div>
          No, you must provide a physical residential address as it is
          mandatory.
        </div>
      </section>
    </template>
  </StartCompany_template>
</template>
<script lang="ts" setup>
import { ref, computed } from "vue";
import StartCompany_template from "../StartCompany_template.vue";
import { useStartCompanyStore } from "../StartCompany_store";
import useFxn from "@/stores/Helpers/useFunctions";
import api from "@/stores/Helpers/axios";
import { useToast } from "vue-toast-notification";

import Founders_corporate from "./Founders_corporate.vue";
import Founders_individual from "./Founders_individual.vue";
import { foundersCorporateForm } from '../pages/formsStore/Founders_corporate';
import { foundersIdividualForm } from '../pages/formsStore/Founders_individual';


const corporate_form = foundersCorporateForm()
const individual_form = foundersIdividualForm()

const founderType = ref<"individual" | "corporate" | null>(null);
const startCompanyStore = useStartCompanyStore();
const toast = useToast();
const founderRadio = ref(false)


const foundersAdded = computed(() => {
  const entity = startCompanyStore.companyInProgress?.company_entity ?? [];
  const arrayOfFounders: any[] = [];
  if (entity.length) {
    entity.forEach((el: any) => {
      const obj = el.individual || el.corporate;
      if (obj) {
        obj.entity_type_id = el.entity_type_id;
        obj.capacity = el.entity_capacity_id;
        arrayOfFounders.push(obj);
      }
    });
  }
  return arrayOfFounders;
});

function closeForm() {
  // useFxn.confirmDelete("This will clear the data field")
    // .then(async (resp) => {
      // if (resp.isConfirmed) {
        startCompanyStore.isShowingFoundersForm = false;
        corporate_form.clearLocalStorage()
        individual_form.clearLocalStorage()
      // }
    // })


}
function moveBack() {
  
  startCompanyStore.switchStage('-')
}
function openForm() {
  corporate_form.resetForm()
  individual_form.resetForm()
  startCompanyStore.isShowingFoundersForm = true
  startCompanyStore.idToEdit = ''
  // individual_form.clearLocalStorage()
  // individual_form.clearLocalStorage()
}

function editFounder(entity: any) {
  founderType.value = entity.entity_type_id == '1' ? 'individual' : 'corporate'
  startCompanyStore.isShowingFoundersForm = true
  startCompanyStore.idToEdit = entity.company_entity_id
  // corporate_form.resetForm()
  // individual_form.resetForm()
  individual_form.clearLocalStorage()
  individual_form.clearLocalStorage()
  founderRadio.value = true;


  populateForms(entity)
}


function populateForms(entity: any) {
  if (entity.entity_type_id == '1') {
    individual_form.flat = entity.res_address.flat
    individual_form.building = entity.res_address.building
    individual_form.street = entity.res_address.street
    individual_form.state = entity.res_address.state
    // individual_form.postal_code = entity.postal_code
    individual_form.country = entity.res_address.country

    // individual_form.flat2 = entity.flat2
    // individual_form.building2 = entity.building2
    // individual_form.street2 = entity.street2
    // individual_form.state2 = entity.state2
    // individual_form.postal_code2 = entity.postal_code2
    // individual_form.country2 = entity.country2

    individual_form.first_name = entity.first_name
    individual_form.last_name = entity.last_name
    if (entity.chn_first_name && entity.chn_first_name != 'undefined') {
      individual_form.hasChineseName = true
      individual_form.chn_first_name = entity.chn_first_name
    }

    if (entity.chn_last_name && entity.chn_last_name != 'undefined')
      individual_form.chn_last_name = entity.chn_last_name
    individual_form.dob = new Date(entity.dob)
    individual_form.nationality = entity.nationality
    individual_form.phone = entity.phone
    individual_form.email = entity.email
    individual_form.confirm_email = entity.email
    individual_form.occupation = entity.occupation
    individual_form.identity_type_id = entity.get_identity.identity_type
    if (entity.get_identity.identity_type == 1) {
      individual_form.passport_no = entity.get_identity.passport_no
      individual_form.issuing_country = entity.get_identity.issueing_country
    }
    if (entity.get_identity.identity_type == 2) {
      individual_form.identity_no = entity.get_identity.identity_no
      if (entity.get_identity.identity_no_suffix)
        individual_form.identity_no_suffix = entity.get_identity.identity_no_suffix
    }

    startCompanyStore.checkedEntityCapacity = JSON.parse(entity.capacity)
  }
  else {
    if (entity.company_name != undefined && entity.company_name != 'undefined')
      corporate_form.company_name = entity.company_name
    if (entity.chn_company_name != undefined && entity.chn_company_name != 'undefined')
      corporate_form.chn_company_name = entity.chn_company_name
    corporate_form.date_incorporated = new Date(entity.date_incorporated)
    corporate_form.flat = entity.flat
    corporate_form.building = entity.building
    corporate_form.street = entity.street
    corporate_form.state = entity.state
    corporate_form.country = entity.country

    // corporate_form.postal_code = entity.postal_code
    if (entity.registeration_no != undefined && entity.registeration_no != 'undefined')
      corporate_form.registeration_no = entity.registeration_no
    corporate_form.country_registered = entity.country_registered
    // @ts-ignore
    corporate_form.business_nature_id = parseInt(entity.business_nature_id)
    corporate_form.phone = entity.authorized_persons.phone
    corporate_form.email = entity.authorized_persons.email
    corporate_form.confirm_email = entity.authorized_persons.email
    corporate_form.first_name = entity.authorized_persons.first_name
    corporate_form.last_name = entity.authorized_persons.last_name

    startCompanyStore.checkedEntityCapacity = JSON.parse(entity.capacity)

  }
}

function deleteFounder(id: any) {
  useFxn
    .confirmDelete("Delete this Record?", "Yes, Delete")
    .then(async (resp) => {
      if (resp.isConfirmed) {
        try {
          const apis = await api.deleteEntity(id);
          toast.success("Record deleted", { position: "top-right" });
          startCompanyStore.getCompanyInProgress("founder");
          individual_form.clearLocalStorage()
          individual_form.clearLocalStorage()
        } catch (error) {
          // console.log(error);
          toast.error("Sorry Something went wrong", { position: "top-right" });
        }
      }
    });
}

function saveAndContinue() {
  startCompanyStore.switchStage('+')
  startCompanyStore.getCompanyInProgress()
}
</script>


<style lang="css" scoped>
.form-check-label {
  cursor: pointer;
}

.pointer-events-none {
  pointer-events: none;
}
</style>
