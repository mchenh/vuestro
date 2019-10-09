<template>
  <vuestro-container>
    <vuestro-card color="#f47633">
      <template #heading>VuestroTable</template>
      <template #description>
        VuestroTable is a fully-reactive component which provides basic datatable functionality such as sort, while leveraging Vue slots to allow itself to be composed into a parent providing more complex functionality.
      </template>
    </vuestro-card>

    <vuestro-card>
      <template #subheading>
        Basic table with auto-generated column names
      </template>
      <vuestro-panel>
        <vuestro-table :data="exampleData"></vuestro-table>
      </vuestro-panel>
    </vuestro-card>

    <vuestro-card>
      <template #subheading>
        Specify columns array property to format column headers and provide options such as padding, sortable, classes, sort (default direction), and a render function.
      </template>
      <vuestro-panel>
        <vuestro-table :options="exampleOptions" :data="exampleData"></vuestro-table>
      </vuestro-panel>
    </vuestro-card>

    <vuestro-card>
      <template #subheading>
        <span>Provide a template for cells and headers through the cell/header slot. The slot scope object <em>item</em> contains a column specifier for headers and both the column specifier and row data item for cells.</span>
      </template>
      <vuestro-panel>
        <vuestro-table :options="exampleOptions" :data="exampleData">
          <template #header="{ item }">
            {{ item }}
          </template>
          <template #cell="{ item }">
            {{ item }}
          </template>
        </vuestro-table>
      </vuestro-panel>
    </vuestro-card>

    <vuestro-card>
      <template #subheading>
        <span>Provide a template for the entire row through the row slot. The slot must contain enough <em>td</em> elements to fill the row. Also, some of the column options such as align will need to be implemented by the parent.</span>
      </template>
      <vuestro-panel>
        <vuestro-table :options="exampleOptions" :data="exampleData">
          <template #row="{ item }">
            <td>{{ item }}</td>
            <td>{{ item }}</td>
            <td>{{ item }}</td>
            <td>{{ item }}</td>
          </template>
        </vuestro-table>
      </vuestro-panel>
    </vuestro-card>

    <vuestro-card>
      <template #subheading>
        <span>Specify <em>component</em> header property to use a Vue component to render a particular column</span>
      </template>
      <vuestro-panel>
        <vuestro-table :options="exampleOptions2" :data="exampleData"></vuestro-table>
      </vuestro-panel>
    </vuestro-card>

    <vuestro-card>
      <template #subheading>
        Set the no-data slot to provide a message when data length is zero.
      </template>
      <vuestro-panel>
        <vuestro-table :options="exampleOptions2" :data="[]">
          <template #no-data>
            No data to show
          </template>
        </vuestro-table>
      </vuestro-panel>
    </vuestro-card>

    <vuestro-card>
      <template #subheading>
        <span>Set the <em>noHeader: true</em> option to skip the header row</span>
      </template>
      <vuestro-panel>
        <vuestro-table :options="exampleOptions3" :data="exampleData">
          <template #no-data>
            No data to show
          </template>
        </vuestro-table>
      </vuestro-panel>
    </vuestro-card>

  </vuestro-container>
</template>

<script>

/* global Vue */
export default {
  name: 'Table',
  data() {
    return {
      exampleOptions: {
        columns: [
          {
            field: 'firstName',
            title: 'First Name',
            sortable: true,
          },
          {
            field: 'lastName',
            title: 'Last Name (specified class)',
            sortable: true,
            sort: 'asc',
            classes: 'test-column-class',
          },
          {
            field: 'phone',
            title: 'Phone No. (centered, render fn)',
            align: 'center',
            render: Vue.filter('vuestroPhoneUS'),
          },
          {
            field: 'email',
            title: 'Email (right-justified, zero padding)',
            align: 'right',
            padding: 0,
          },
        ],
      },
      exampleOptions2: {
        columns: [
          {
            field: 'firstName',
            title: 'First Name',
            sortable: true,
          },
          {
            field: 'lastName',
            title: 'Last Name',
            sortable: true,
          },
          {
            field: 'phone',
            title: 'Phone No. (centered, render fn)',
            align: 'center',
            render: Vue.filter('vuestroPhoneUS'),
          },
          {
            field: 'email',
            title: 'Email (VuestroEditableText component)',
            align: 'right',
            component: 'VuestroEditableText',
          },
        ],
      },
      exampleOptions3: {
        noHeader: true,
      },
      exampleData: [
        {
          firstName: 'Trent',
          lastName: 'Wilson',
          phone: '5553344232',
          email: 'goodtime@club.net',
        },
        {
          firstName: 'Ashley',
          lastName: 'Dobson',
          phone: '5553728112',
          email: 'youwish@gmail.com',
        },
        {
          firstName: 'Grace',
          lastName: 'Johnson',
          phone: '5552918382',
          email: 'oldmaid@caring.org',
        },
        {
          firstName: 'Trent',
          lastName: 'Washington',
          phone: '5558382833',
          email: 'justintime@ymail.net',
        },
      ],
    };
  },
};

</script>

<style scoped>

.vuestro-table >>> .test-column-class {
  font-weight: 700;
  padding: 10px;
}

</style>