<script lang="ts" setup>
import type { RadioGroupProps, RadioProps } from 'element-plus';

interface Props {
  items?: Partial<RadioProps & { value: any }>[];
  config?: Partial<RadioGroupProps>;
}

interface Emits {
  (event: 'change', data?: string | number | boolean): void;
}

defineProps<Props>();
const emits = defineEmits<Emits>();

const model = defineModel<string | number | boolean>();
</script>

<template>
  <el-form-item>
    <el-radio-group
      v-model="model"
      size="large"
      v-bind="config"
      @change="(event) => emits('change', event)"
    >
      <slot v-bind="{ items }">
        <template v-for="(option, index) in items" :key="index">
          <el-radio v-if="option.label" v-bind="option" :label="option.value">
            {{ option.label }}
          </el-radio>
          <el-radio v-else v-bind="option" :label="option.value" />
        </template>
      </slot>
    </el-radio-group>
  </el-form-item>
</template>
