<script lang="ts" setup>
import type { InputInstance, InputProps } from 'element-plus';

export interface CommonFormItemInputProps {
  size?: '' | 'default' | 'small' | 'large';
  config?: Partial<
    InputProps & {
      maxlength: string | number;
      rows: number;
      minRows: number;
      autofocus: boolean;
    }
  >;
}

interface Emits {
  (event: 'blur', value: any): void;
  (clear: 'clear', value: any): void;
  (change: 'change', value: any): void;
}

const props = withDefaults(defineProps<CommonFormItemInputProps>(), {
  name: undefined,
  size: 'large',
  config: undefined,
});
const emits = defineEmits<Emits>();
const inputRef = ref<InputInstance>();

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
    <el-input
      ref="inputRef"
      v-model="model"
      :size="size"
      v-bind="config"
      @blur="emits('blur', model)"
      @clear="emits('clear', '')"
      @change="emits('change', model)"
    />
  </el-form-item>
</template>

<style scoped lang="scss">
.el-textarea {
  &.el-input--large {
    min-height: var(--el-input-height);

    :deep(.el-textarea__inner) {
      min-height: var(--el-input-height) !important;
      padding-top: 9px;
      padding-bottom: 9px;
    }
  }
}
</style>
