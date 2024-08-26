import Main from '@/containers/ArrangeRecord/Main';
import { createMetadata } from '@/lib/Metadata';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async ({ params: { locale } }: { params: { locale: string } }) => {
  const t = await getTranslations({ locale, namespace: 'seo.arrangerecord' });
  return createMetadata(
    t('title'),
    t('description'),
    `${locale === 'en' ? '/en' : ''}/arrangerecord`,
  );
};

const ArrangeRecord = () => {
  return <Main />;
};

export default ArrangeRecord;
