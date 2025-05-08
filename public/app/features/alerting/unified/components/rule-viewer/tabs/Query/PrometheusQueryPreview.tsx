import { RawQuery } from '@grafana/plugin-ui';
import { promqlGrammar } from '@grafana/prometheus';
import { t } from 'app/core/internationalization';

interface Props {
  query: string;
}

const PrometheusQueryPreview = ({ query }: Props) => {
  return (
    <pre>
      <RawQuery
        query={query}
        language={{ grammar: promqlGrammar, name: t('alerting.prometheus-query-preview.name.promql', 'promql') }}
      />
    </pre>
  );
};

export default PrometheusQueryPreview;
