import React from 'react';
import { SearchingHeader } from '../ui/search-section/searching-header';
import BackButton from '../ui/common/back.btn';

type Props = {};

const Page = (props: Props) => {
  return (
    <section>
      <div className="container mt-[90px] min-h-[50vh]">
        <BackButton />
        <SearchingHeader />
      </div>
    </section>
  );
};

export default Page;
