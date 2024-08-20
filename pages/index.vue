<script lang="ts" setup>
definePageMeta({ layout: 'page' })

const defaultFormTemplate: any[] = [
  {
    value: 'name',
    label: 'Name',
    type: 'INPUT',
  },
  {
    value: 'address',
    label: 'Name',
    type: 'TEXTAREA',
    required: true,
  },
  {
    value: 22,
    label: 'Age',
    type: 'NUMBER',
  },
  {
    value: '1',
    label: 'Gender',
    type: 'RADIO',
    options: [
      { label: 'male', value: '1' },
      { label: 'female', value: '2' },
    ],
  },
  {
    value: '1',
    label: 'Role',
    type: 'SELECT',
    options: [
      { label: 'DEV', value: '1' },
      { label: 'BE', value: '2' },
    ],
  },
  {
    label: 'Province/City',
    type: 'SELECT',
    options: [
      { label: 'Hanoi', value: '1' },
      { label: 'HCM', value: '2' },
    ],
    value: '1',
  },
  {
    label: 'District',
    type: 'SELECT',
    dependentField: 'Province/City',
    options: [
      { dependentValue: '1', label: 'Cau Giay', value: '1' },
      { dependentValue: '1', label: 'Dong Da', value: '2' },
      { dependentValue: '2', label: 'Quan 1', value: '3' },
      { dependentValue: '2', label: 'Quan 2', value: '4' },
    ],
  },
]
const fieldTemplate = ref<any[]>(defaultFormTemplate)

const handleBlurField = (data: any) => {
  const fieldHasDependent = fieldTemplate.value.find(
    (field) => field.dependentField === data.label,
  )
  if (fieldHasDependent) {
    if (!fieldHasDependent?.tempOptions?.length) {
      (fieldHasDependent as any).tempOptions = fieldHasDependent.options
    }

    fieldHasDependent.options = fieldHasDependent?.tempOptions.filter(
      (f: any) => f.dependentValue === data.value,
    )
  }
}
</script>

<template>
  <div>
    <div
      v-for="(fieldItem, index) in fieldTemplate"
      :key="fieldItem.label + index"
    >
      <CommonDynamicField
        v-model="fieldItem.value"
        :field-key="fieldItem.label + index"
        :field="fieldItem"
        @blur="handleBlurField"
      />
    </div>
  </div>
</template>
