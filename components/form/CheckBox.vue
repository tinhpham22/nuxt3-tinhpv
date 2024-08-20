<script lang="ts" setup>
import type {
  CheckboxGroupProps,
  CheckboxGroupValueType,
  CheckboxProps,
} from 'element-plus';

interface Props {
  items?: Partial<CheckboxProps & { value?: any }>[];
  config?: Partial<CheckboxGroupProps>;
}
defineProps<Props>();
const model = defineModel<CheckboxGroupValueType>();
</script>

<template>
  <el-form-item>
    <el-checkbox-group v-model="model" v-bind="config">
      <slot v-bind="{ items }">
        <template v-for="(option, index) in items" :key="index">
          <el-checkbox v-if="option.label" :label="option.value">
            {{ option.label }}
          </el-checkbox>
          <el-checkbox v-else v-bind="option" :label="option.value" />
        </template>
      </slot>
    </el-checkbox-group>
  </el-form-item>
</template>
