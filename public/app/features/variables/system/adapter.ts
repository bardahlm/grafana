import { ComponentType } from 'react';

import { LoadingState, SystemVariable, VariableHide } from '@grafana/data';
import { t } from 'app/core/internationalization';

import { VariableAdapter } from '../adapters';
import { VariableEditorProps } from '../editor/types';
import { VariablePickerProps } from '../pickers/types';
import { initialVariableModelState } from '../types';

export const createSystemVariableAdapter = (): VariableAdapter<SystemVariable<any>> => {
  return {
    id: 'system',
    description: '',
    name: t('variables.create-system-variable-adapter.name.system', 'system'),
    initialState: {
      ...initialVariableModelState,
      type: 'system',
      hide: VariableHide.hideVariable,
      skipUrlSync: true,
      current: { value: { toString: () => '' } },
      state: LoadingState.Done,
    },
    reducer: (state: any) => state,
    picker: null as unknown as ComponentType<VariablePickerProps<SystemVariable<any>>>,
    editor: null as unknown as ComponentType<VariableEditorProps<SystemVariable<any>>>,
    dependsOn: () => {
      return false;
    },
    setValue: async (variable, option, emitChanges = false) => {
      return;
    },
    setValueFromUrl: async (variable, urlValue) => {
      return;
    },
    updateOptions: async (variable) => {
      return;
    },
    getSaveModel: (variable) => {
      return {};
    },
    getValueForUrl: (variable) => {
      return '';
    },
  };
};
