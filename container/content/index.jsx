"use client"
import React from 'react';
import { useState } from 'react';
import { Container, Sidebar, Costum, Card } from '@/components';
import { Products } from '@/mocks/products';

function Index() {
  const layout = 3;
  const [products, setProducts] = useState(Products); 

  
  const sortProductsByPrice = (order) => {
    const sortedProducts = [...products].sort((a, b) => {
      if (order === "ascending") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    return sortedProducts;
  };

  
  const handleSort = (order) => {
    const sortedProducts = sortProductsByPrice(order);
    setProducts(sortedProducts);
  };

  return (
    <>
      <Container>
        <div className='flex flex-col lg:flex-row justify-between'>
          <div className='w-full lg:w-1/4 mb-5 pt-16'>
            <Sidebar />
          </div>
          <div className='w-full lg:w-3/4'>
            <div className=''>
              <Costum handleSort={handleSort} /> 
            </div>
            <div>
              <div className={`w-full grid ${layout === 3 ? 'grid-cols-1 lg:grid-cols-3' : 'grid-cols-2'}  gap-5 px-3`}>
                {
                  products.map((item, index) => <Card tag={item.slug} data={item} key={index} />)
                }
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Index;
