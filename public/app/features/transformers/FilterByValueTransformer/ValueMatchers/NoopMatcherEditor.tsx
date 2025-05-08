import { ValueMatcherID } from '@grafana/data';
import { t } from 'app/core/internationalization';

import { ValueMatcherUIRegistryItem } from './types';

interface Props {}
export const NoopMatcherEditor = (props: Props) => {
  return null;
};

export const getNoopValueMatchersUI = (): Array<ValueMatcherUIRegistryItem<Props>> => {
  return [
    {
      name: t('transformers.get-noop-value-matchers-ui.name.is-null', 'Is null'),
      id: ValueMatcherID.isNull,
      component: NoopMatcherEditor,
    },
    {
      name: t('transformers.get-noop-value-matchers-ui.name.is-not-null', 'Is not null'),
      id: ValueMatcherID.isNotNull,
      component: NoopMatcherEditor,
    },
  ];
};
