<script lang="ts" setup>
import type { InputInstance, InputProps } from 'element-plus';

interface Props {
  config?: Partial<
    InputProps & {
      maxlength: string | number;
      rows: number;
      minRows: number;
      autofocus: boolean;
    }
  >;
}

defineProps<Props>();
const inputRef = ref<InputInstance>();
const regex = /\D/g;

const model = defineModel<string>();

const focus = () => {
  inputRef.value?.focus();
};

defineExpose({
  inputRef,
  focus,
});
</script>
<template>
  <el-form-item>
    <el-input ref="inputRef" v-model="model" size="large" v-bind="config" />
  </el-form-item>
</template>
