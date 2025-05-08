import { Registry, RegistryItem } from '@grafana/data';
import { Spec as DashboardV2Spec } from '@grafana/schema/dist/esm/schema/dashboard/v2alpha1/types.spec.gen';
import { t } from 'app/core/internationalization';

import { DashboardLayoutManager } from '../../scene/types/DashboardLayoutManager';

import { deserializeAutoGridLayout } from './AutoGridLayoutSerializer';
import { deserializeDefaultGridLayout } from './DefaultGridLayoutSerializer';
import { deserializeRowsLayout } from './RowsLayoutSerializer';
import { deserializeTabsLayout } from './TabsLayoutSerializer';

interface LayoutSerializerRegistryItem extends RegistryItem {
  deserialize: (
    layout: DashboardV2Spec['layout'],
    elements: DashboardV2Spec['elements'],
    preload: boolean,
    panelIdGenerator?: () => number
  ) => DashboardLayoutManager;
}

export const layoutDeserializerRegistry: Registry<LayoutSerializerRegistryItem> =
  new Registry<LayoutSerializerRegistryItem>(() => {
    return [
      {
        id: 'GridLayout',
        name: t('dashboard-scene.layout-deserializer-registry.name.grid-layout', 'Grid Layout'),
        deserialize: deserializeDefaultGridLayout,
      },
      {
        id: 'AutoGridLayout',
        name: t('dashboard-scene.layout-deserializer-registry.name.auto-grid-layout', 'Auto Grid Layout'),
        deserialize: deserializeAutoGridLayout,
      },
      {
        id: 'RowsLayout',
        name: t('dashboard-scene.layout-deserializer-registry.name.rows-layout', 'Rows Layout'),
        deserialize: deserializeRowsLayout,
      },
      {
        id: 'TabsLayout',
        name: t('dashboard-scene.layout-deserializer-registry.name.tabs-layout', 'Tabs Layout'),
        deserialize: deserializeTabsLayout,
      },
    ];
  });
