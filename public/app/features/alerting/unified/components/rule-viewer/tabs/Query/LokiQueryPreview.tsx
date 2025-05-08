import { RawQuery } from '@grafana/plugin-ui';
import { t } from 'app/core/internationalization';
import lokiGrammar from 'app/plugins/datasource/loki/syntax';

interface Props {
  query: string;
}

const LokiQueryPreview = ({ query }: Props) => {
  return (
    <pre>
      <RawQuery
        query={query}
        language={{ grammar: lokiGrammar, name: t('alerting.loki-query-preview.name.promql', 'promql') }}
      />
    </pre>
  );
};

export default LokiQueryPreview;
