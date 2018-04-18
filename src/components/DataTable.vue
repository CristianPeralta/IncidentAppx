<template lang='html'>
    <v-client-table :columns='columnsD' :data='dataD' :options='optionsD'>
      <a slot='uri' slot-scope='props' target='_blank' :href='props.row.dependence.acronym' class='glyphicon glyphicon-eye-open'></a>

      <div slot='child_row' slot-scope='props'>
        The link to {{props.row.name}} is <a :href='props.row.dependence.acronym'>{{props.row.dependence.acronym}}</a>
      </div>
    </v-client-table>
</template>

<script>
export default {
  name: 'DataTable',
  props: ['columnsD', 'dataD', 'optionsD']
}
</script>

<style lang="css" scoped>
 @import "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";

.VuePagination {
  text-align: center;
}

.vue-title {
  text-align: center;
  margin-bottom: 10px;
}

.vue-pagination-ad {
  text-align: center;
}

.glyphicon.glyphicon-eye-open {
  width: 16px;
  display: block;
  margin: 0 auto;
}

th:nth-child(3) {
  text-align: center;
}

.VueTables__child-row-toggler {
  width: 16px;
  height: 16px;
  line-height: 16px;
  display: block;
  margin: auto;
  text-align: center;
}

.VueTables__child-row-toggler--closed::before {
  content: "+";
}

.VueTables__child-row-toggler--open::before {
  content: "-";
}
</style>
