import { $instance } from '../instances'

export default {
    companiesList(search = '', page: number) {
        return $instance.get(`/companies/search?page=${page}&search=${search}`)
    },

    companiesSort() {
        return $instance.get(`/company?sort=latest`)
    },

    companiesFilter(filterString: string | number) {
        return $instance.get(`/companies/filter?${filterString}`)
    },

    companyDetails(company_id: string | number) {
        return $instance.get(`/company/details/${company_id}`)
    },
}