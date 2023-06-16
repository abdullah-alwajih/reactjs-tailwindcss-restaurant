import React from 'react';
import { useState } from 'react';
import Roll from "./Roll";
import {Button} from "./Button";

const Category = ({ filterByCategory, allCategory }) => {
  const [searchValue, setSearchValue] = useState('');

  const onFilter = (cat) => filterByCategory(cat);

  return (
    <div className="my-2 mb-5">
      <div className="flex justify-center">
        <Roll>
          {allCategory.length >= 1 ? (
            allCategory.map((cat, index) => (
              <div className='flex' key={index}>
                  <Button text={cat} onClick={() => onFilter(cat)} />
              </div>
            ))
          ) : (
            <h4>لا يوجد تصنيفات لاان</h4>
          )}
        </Roll>
      </div>
    </div>
  );
};

export default Category;
