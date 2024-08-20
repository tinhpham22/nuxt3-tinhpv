<script lang="ts" setup>
interface Props {
  items?: any[];
  keyLabel?: string;
  keyValue?: string;
  config?: any;
}

interface Emits {
  (event: 'change', data: any): void;
  (event: 'blur', data: any): void;
}

withDefaults(defineProps<Props>(), {
  keyLabel: 'label',
  keyValue: 'value',
  modelValue: null,
  name: undefined,
  items: () => [],
  config: undefined,
});

const emits = defineEmits<Emits>();
const model = defineModel<any>();
</script>

<template>
  <el-form-item>
    <el-select
      v-model="model"
      size="large"
      v-bind="config"
      @change="(event) => emits('change', event)"
      @blur="(event) => emits('blur', event)"
    >
      <slot v-bind="{ items }">
        <el-option
          v-for="option in items"
          :key="option[keyValue]"
          v-bind="option"
          :label="option[keyLabel]"
          :value="option[keyValue]"
          :disabled="option.disabled"
        />
      </slot>
    </el-select>
  </el-form-item>
</template>
