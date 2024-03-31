<template>
  <StartCompany_template>
    <template #main>
      <section class="section">
        <div class="fw-bolder fs-5">Founders / Directors</div>
        <span>Tell us the details about the founder and director.</span>
      </section>
      <div v-if="!startCompanyStore.isShowingFoundersForm">
        <section class="section">
          <div class="card" style="
            display: flex;
            align-items: center;
            height: 60px;
            background: #eeeeff;
            padding: 10px;
          ">
            <button class="btn btn-outline-none" @click="startCompanyStore.isShowingFoundersForm = true">
              <i class="bi bi-plus-circle"></i> Add New founder / Director
            </button>
          </div>
        </section>
        <section v-if="foundersAdded.length" class="section">
          <div class="card" style="width: 100%">
            <div class="card-header" style="background: #eeeeff">Founders / Directors </div>
            <div class="table-responsive">
              <table class="table table-sm ">
                <tbody>
                  <tr v-for="item in foundersAdded" :key="item">
                    <i class="bi bi-person-circle" style="font-size:20px; padding-left:20px"></i>
                    <td class="text-capitalize " v-if="item.entity_type_id == 1">
                      {{ item.first_name + " " + item.last_name }} <br>
                      <small> {{ item.capacity.includes('1') ? 'Shareholder' : '' }}</small>
                      {{ item.capacity.length > 3 ? "/" : "" }}
                      <small> {{ item.capacity.includes('2') ? 'Director' : '' }}</small>

                    </td>
                    <td v-else class="text-capitalize">
                      {{ item.company_name }} <br>
                      <small> {{ item.capacity.includes('1') ? 'Shareholder' : '' }}</small>
                      <small> {{ item.capacity.includes('2') ? 'Director' : '' }} </small>
                    </td>
                    <td class="text">
                      {{ item.entity_type_id == "1" ? "Individual" : "Corporate" }}
                    </td>
                    <td>
                      <button class="btn btn-sm border-0 text-info p-0 m-0">
                        Edit
                      </button>
                    </td>
                    <td>
                      <button @click="deleteFounder(item.company_entity_id)"
                        class="btn border-0 btn-sm text-danger p-0 m-0">
                        Remove
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

      <div v-else>
        <section class="section">
          <div class="fw-bold">What is the type of founder/director? </div>

          <div class="row justify-content- mt-1">
            <div @click="founderType = 'individual'" class="col-4 cursor-pointer">
              <i v-if="founderType == 'individual'" class="bi bi-record-circle-fill text-primary me-1"></i>
              <i v-else class="bi bi-circle me-1"></i>
              Individual
            </div>

            <div @click="founderType = 'corporate'" class="col-4 cursor-pointer">
              <i v-if="founderType == 'corporate'" class="bi bi-record-circle-fill text-primary me-1"></i>
              <i v-else class="bi bi-circle me-1"></i>
              Corporate
            </div>
          </div>
        </section>

        <section class="section">
          <div class="fw-bold">What is the Capacity of this individual? shareholder </div>
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
        <Founders_corporate v-else />
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
import { ref, computed, onMounted } from "vue";
import StartCompany_template from "../StartCompany_template.vue";
import { useStartCompanyStore } from "../StartCompany_store";
import useFxn from "@/stores/Helpers/useFunctions";
import api from "@/stores/Helpers/axios";
import { useToast } from "vue-toast-notification";

import Founders_corporate from "./Founders_corporate.vue";
import Founders_individual from "./Founders_individual.vue";

const founderType = ref<"individual" | "corporate">("individual");
const startCompanyStore = useStartCompanyStore();
const toast = useToast();
const addButton = ref(true);

// function updateAddButton(param: boolean) {
//   addButton.value = param;
//   startCompanyStore.isShowingFoundersForm = true
//   // return [updateAddButton]
// }



const foundersAdded = computed(() => {
  const entity = startCompanyStore.companyInProgress?.company_entity ?? [];
  console.log(entity);
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
  //   console.log(arrayOfFounders)
  return arrayOfFounders;
});

function deleteFounder(id: any) {
  useFxn
    .confirmDelete("Delete this Record?", "Yes, Delete")
    .then(async (resp) => {
      if (resp.isConfirmed) {
        try {
          await api.deleteEntity(id);
          toast.success("Record deleted", { position: "top-right" });
          startCompanyStore.getCompanyInProgress("founder");

        } catch (error) {
          console.log(error);
          toast.error("Sorry Something went wrong", { position: "top-right" });
        }
      }
    });
}
</script>
<style lang="css" scoped>
.form-check-label {
  cursor: pointer;
}
</style>
