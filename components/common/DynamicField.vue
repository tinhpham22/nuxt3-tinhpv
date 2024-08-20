<script setup lang="ts">
import { defineProps } from 'vue'
import FormInput from '~/components/form/Input.vue'
import FormInputNumber from '~/components/form/InputNumber.vue'
import FormSelect from '~/components/form/Select.vue'
import FormRadio from '~/components/form/Radio.vue'
import FormCheckBox from '~/components/form/CheckBox.vue'

const props = defineProps<{
  field: any
  disabled?: boolean
  fieldKey: string
}>()

const emit = defineEmits<{
  (event: 'change-value', value: any): void
  (event: 'blur', value: any): void
}>()

const fieldRef = ref<any>(props.field)

watchEffect(() => {
  fieldRef.value = props.field
})

const getFieldComponent = (type: string) => {
  switch (type) {
    case 'INPUT':
      return FormInput
    case 'NUMBER':
      return FormInputNumber
    case 'TEXTAREA':
      return FormInput
    case 'SELECT':
      return FormSelect
    case 'RADIO':
      return FormRadio
    case 'CHECKBOX':
      return FormCheckBox
    default:
      return ''
  }
}

const getFieldConfig = (fieldType: string) => {
  if (fieldType === 'TEXTAREA') {
    return {
      type: 'textarea',
      minRows: 3,
    }
  }
  return { type: fieldType }
}

const handleChangeValueField = (value: any) => {
  fieldRef.value.value = value
  emit('change-value', { ...props.field, value })
}

const handleBlurField = () => {
  emit('blur', { label: props.field.label, value: fieldRef.value.value })
}
</script>

<template>
  <el-form
    v-if="!field.hide"
    :id="fieldKey"
    label-position="top"
    :disabled="disabled"
  >
    <template v-if="field.type">
      <div class="field-wrapper flex flex-col">
        <el-form-item :id="fieldKey" :class="['mb-[20px]']">
          <span class="ms-2" :style="{ width: '150px' }">{{
            field.label
          }}</span>
          <component
            :is="getFieldComponent(field.type)"
            :model-value="fieldRef.value"
            :items="field.options"
            :config="getFieldConfig(field.type)"
            :style="{ width: '300px' }"
            @update:model-value="handleChangeValueField($event)"
            @blur="handleBlurField"
          />
        </el-form-item>
      </div>
    </template>
  </el-form>
</template>
