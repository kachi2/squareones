// @ts-nochecks
import { ref } from "vue";
import { defineStore } from "pinia";
import { useForm } from "vee-validate";
import { useStorage } from "@vueuse/core";
// @ts-ignore
import * as yup from "yup";

export const foundersIdividualForm = defineStore("foundersIdividual", () => {

  const chineseCheck = (value: any) => {
    var pattern = /^[\u4E00-\u9FFF\u3400-\u4DBF\s*\(\)\,]+$/;
    return hasChineseName.value ? pattern.test(value) : true
  };

  const correspondingAddressCheck = (value: any) => {
    return !correspondingAddressIsSame.value ? (value !== undefined && value != '') : true;
  }

  const rules = {
    chn_first_name: yup.string().test("chineseCheck", "Please input only Chinese characters", chineseCheck),
    chn_last_name: yup.string().test("chineseCheck", "Please input only Chinese characters", chineseCheck),

    flat: yup.string().required("Flat is required"),
    building: yup.string().nullable(),
    street: yup.string().required("Street is required"),
    state: yup.string().required("State is required"),
    // city: yup.string(),
    country: yup.string().required("Country is required"),

    flat2: yup.string().test("correspondingAddressCheck", "This field is required", correspondingAddressCheck),
    building2: yup.string().nullable(),
    street2: yup.string().test("correspondingAddressCheck", "This field is required", correspondingAddressCheck),
    state2: yup.string().test("correspondingAddressCheck", "This field is required", correspondingAddressCheck),
    // city2: yup.string().test("correspondingAddressCheck", "This field is required", correspondingAddressCheck),
    country2: yup.string().test("correspondingAddressCheck", "This field is required", correspondingAddressCheck),

    phone: yup.string().required("Phone is required"),
    email: yup.string().email().required("Email is required"),
    confirm_email: yup.string().required("Email is required"),
    first_name: yup.string().required("First Name is required"),
    last_name: yup.string().required("Last Name is required"),
    nationality: yup.string().required(),
    occupation: yup.string().required("Occupation is required"),
    identity_type_id: yup.string().required("ID type is required"),
    identity_no: yup.string(),
    identity_no_suffix: yup.string(),
    passport_no: yup.string(),
    dob: yup.string().required("Date of birth is required"),
  };


  const { errors, handleSubmit, defineField, setFieldValue, resetForm, validateField, resetField } = useForm({
    validationSchema: yup.object(rules),

    // initialValues: {
    //   date_incorporated: new Date(),
    //   entity_type_id: "1",
    //   country: "",
    //   country2: "",
    //   issuing_country: "",
    //   // nationality: "",
    //   identity_type_id: "",
    //   is_founder: false,
    //   // dob: futureDate,
    // },
  });

  function validateVueSelectOnBlur(str: string) {
    validateField(str)
  }

  const [entity_type_id] = defineField("entity_type_id");

  const [flat, flatAttr] = defineField("flat");
  const [building, buildingAttr] = defineField("building");
  const [street, streetAttr] = defineField("street");
  const [state, stateAttr] = defineField("state");
  // const [city] = defineField('city');
  const [country, countryAttr] = defineField("country");
  const [postal_code, postal_codeAttr] = defineField("postal_code");
  const [identity_no_suffix, identity_no_suffixAttr] = defineField("identity_no_suffix");

  const [flat2, flat2Attr] = defineField("flat2");
  const [building2, building2Attr] = defineField("building2");
  const [street2, street2Attr] = defineField("street2");
  const [state2, state2Attr] = defineField("state2");
  // const [city2] = defineField('city2');
  const [country2, country2Attr] = defineField("country2");
  const [postal_code2, postal_code2Attr] = defineField("postal_code2");

  const [issuing_country, issuing_countryAttr] = defineField("registeration_no");
  const [is_founder] = defineField("is_founder");

  const [phone, phoneAttr] = defineField("phone");
  const [email, emailAttr] = defineField("email");
  const [confirm_email, confirm_emailAttr] = defineField("confirm_email");
  const [first_name, first_nameAttr] = defineField("first_name");
  const [last_name, last_nameAttr] = defineField("last_name");
  const [chn_first_name, chn_first_nameAttr] = defineField("chn_first_name");
  const [chn_last_name, chn_last_nameAttr] = defineField("chn_last_name");
  const [nationality, nationalityAttr] = defineField("nationality");

  const [occupation, occupationAttr] = defineField("occupation");
  const [identity_type_id, identity_type_idAttr] = defineField("identity_type_id");
  const [identity_no, identity_noAttr] = defineField("identity_no");
  const [passport_no, passport_noAttr] = defineField("passport_no");
  const [dob, dobAttr] = defineField("dob");

  const isSaving = false;

  const correspondingAddressIsSame = ref(false);
  const hasChineseName = ref(false);

  // localStorage
  const flat_storage: any = useStorage("squareOne-fInd-flat", "");
  const building_storage: any = useStorage("squareOne-fInd-building", "");
  const street_storage: any = useStorage("squareOne-fInd-street", "");
  const state_storage: any = useStorage("squareOne-fInd-state", "");
  const country_storage: any = useStorage("squareOne-fInd-country", "");
  const postal_code_storage: any = useStorage("squareOne-fInd-postal_code", "");

  const flat2_storage: any = useStorage("squareOne-fInd-flat2", "");
  const building2_storage: any = useStorage("squareOne-fInd-building2", "");
  const street2_storage: any = useStorage("squareOne-fInd-street2", "");
  const state2_storage: any = useStorage("squareOne-fInd-state2", "");
  const country2_storage: any = useStorage("squareOne-fInd-country2", "");
  const postal_code2_storage: any = useStorage("squareOne-fInd-postal_code2", "");

  const issuing_country_storage: any = useStorage("squareOne-fInd-issuing_country", "");
  const phone_storage: any = useStorage("squareOne-fInd-phone", "");
  const email_storage: any = useStorage("squareOne-fInd-email", "");
  const confirm_email_storage: any = useStorage("squareOne-fInd-confirm_email", "");
  const first_name_storage: any = useStorage("squareOne-fInd-first_name", "");
  const last_name_storage: any = useStorage("squareOne-fInd-last_name", "");
  const chn_first_name_storage: any = useStorage(
    "squareOne-fInd-chn_first_name",
    " "
  );
  const chn_last_name_storage: any = useStorage("squareOne-fInd-chn_last_name", " ");

  const nationality_storage: any = useStorage("squareOne-fInd-nationality", "");
  const occupation_storage: any = useStorage("squareOne-fInd-occupation", "");
  const identity_no_storage: any = useStorage("squareOne-fInd-identity_no", "");
  const identity_no_suffix_storage: any = useStorage("squareOne-fInd-identity_no_suffix", "");
  const passport_no_storage: any = useStorage("squareOne-fInd-passport_no", "");


  function saveToLocalStorage() {
    // if (flat.value)
    flat_storage.value = flat.value;
    // if (building.value)
    building_storage.value = building.value;
    // if (street.value)
    street_storage.value = street.value;
    // if (state.value)
    state_storage.value = state.value;
    // if (country.value)
    country_storage.value = country.value;
    // if (postal_code.value)
    postal_code_storage.value = postal_code.value;

    // if (flat2.value)
    flat2_storage.value = flat2.value;
    // if (building2.value)
    building2_storage.value = building2.value;
    // if (street2.value)
    street2_storage.value = street2.value;
    // if (state2.value)
    state2_storage.value = state2.value;
    // if (country2.value)
    country2_storage.value = country2.value;
    // if (postal_code2.value)
    postal_code2_storage.value = postal_code2.value;
    // if (identity_no_suffix.value)
    identity_no_suffix_storage.value = identity_no_suffix.value;
    // if (issuing_country.value)
    issuing_country_storage.value = issuing_country.value;
    // if (phone.value)
    phone_storage.value = phone.value;
    // if (email.value)
    email_storage.value = email.value;
    // if (confirm_email.value)
    confirm_email_storage.value = confirm_email.value;
    // if (first_name.value)
    first_name_storage.value = first_name.value;
    // if (last_name.value)
    last_name_storage.value = last_name.value;
    // if (chn_first_name.value)
    chn_first_name_storage.value = chn_first_name.value;
    // if (chn_last_name.value)
    chn_last_name_storage.value = chn_last_name.value;
    // if (nationality.value)
    nationality_storage.value = nationality.value;
    // if (occupation.value)
    occupation_storage.value = occupation.value;
    // if (identity_no.value)
    identity_no_storage.value = identity_no.value;
    // if (passport_no.value)
    passport_no_storage.value = passport_no.value;
  }

  function updateFields(companyInProgress: any) {
    if (flat_storage.value) flat.value = flat_storage.value;
    if (building_storage.value)
      building.value = building_storage.value;
    if (street_storage.value) street.value = street_storage.value;
    if (state_storage.value) state.value = state_storage.value;
    if (country_storage.value) country.value = country_storage.value;
    if (postal_code_storage.value)
      postal_code.value = postal_code_storage.value;
    if (flat2_storage.value) flat2.value = flat2_storage.value;
    if (building2_storage.value)
      building2.value = building2_storage.value;
    if (street2_storage.value) street2.value = street2_storage.value;
    if (state2_storage.value) state2.value = state2_storage.value;
    if (country2_storage.value)
      country2.value = country2_storage.value;
    if (postal_code2_storage.value)
      postal_code2.value = postal_code2_storage.value;
    if (issuing_country_storage.value)
      issuing_country.value = issuing_country_storage.value;
    if (phone_storage.value) phone.value = phone_storage.value;
    if (email_storage.value) email.value = email_storage.value;
    if (confirm_email_storage.value)
      confirm_email.value = confirm_email_storage.value;
    if (first_name_storage.value)
      first_name.value = first_name_storage.value;
    if (last_name_storage.value)
      last_name.value = last_name_storage.value;
    if (chn_first_name_storage.value)
      chn_first_name.value = chn_first_name_storage.value;
    if (chn_last_name_storage.value)
      chn_last_name.value = chn_last_name_storage.value;
    if (nationality_storage.value)
      nationality.value = nationality_storage.value;

    if (occupation_storage.value)
      occupation.value = occupation_storage.value;
    if (identity_no_storage.value)
      identity_no.value = identity_no_storage.value;
    if (passport_no_storage.value)
      passport_no.value = passport_no_storage.value;
  }

  function clearLocalStorage() {
    flat_storage.value = "";
    building_storage.value = "";
    street_storage.value = "";
    state_storage.value = "";
    country_storage.value = "";
    postal_code_storage.value = "";
    identity_no_suffix_storage.value = "";
    flat2_storage.value = "";
    building2_storage.value = "";
    street2_storage.value = "";
    state2_storage.value = "";
    country2_storage.value = "";
    postal_code2_storage.value = "";

    issuing_country_storage.value = "";
    phone_storage.value = "";
    email_storage.value = "";
    confirm_email_storage.value = "";
    first_name_storage.value = "";
    last_name_storage.value = "";
    chn_first_name_storage.value = "";
    chn_last_name_storage.value = "";
    nationality_storage.value = "";
    occupation_storage.value = "";
    identity_no_storage.value = "";
    passport_no_storage.value = "";
    
  }

  return {
    entity_type_id,
    flat, flatAttr,
    building, buildingAttr,
    street, streetAttr,
    // city,
    state, stateAttr,
    postal_code, postal_codeAttr,
    country, countryAttr,
    flat2, flat2Attr,
    building2, building2Attr,
    street2, street2Attr,
    // city2,
    state2, state2Attr,
    postal_code2, postal_code2Attr,
    country2, country2Attr,
    first_name, first_nameAttr,
    last_name, last_nameAttr,
    chn_first_name, chn_first_nameAttr,
    chn_last_name, chn_last_nameAttr,
    dob, dobAttr,
    nationality, nationalityAttr,
    phone, phoneAttr,
    email, emailAttr,
    confirm_email, confirm_emailAttr,
    occupation, occupationAttr,
    identity_no, identity_noAttr,
    identity_no_suffix, identity_no_suffixAttr,
    passport_no, passport_noAttr,
    issuing_country, issuing_countryAttr,


    is_founder,
    identity_type_id, identity_type_idAttr,
    isSaving,
    correspondingAddressIsSame,
    hasChineseName,

    errors,
    handleSubmit,
    setFieldValue,
    updateFields,
    clearLocalStorage,
    saveToLocalStorage,
    resetForm,
    validateVueSelectOnBlur,
    resetField,
  };
});
