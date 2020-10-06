import React, { useState, useEffect } from 'react'; 
import PropTypes from 'prop-types';

import Row from '@components/molecules/Row';
import Pagination from '@components/molecules/Pagination';

import { Container, PaginationWrapper } from './style';

const List = ({ items, itemsPerPage }) => {
  const [page, setPage] = useState(1);
  const [slicedItems, setSlicedItems] = useState([]);

  useEffect(() => {
    setSlicedItems(items.slice(page*itemsPerPage-itemsPerPage, page*itemsPerPage));
  }, [page]);

  useEffect(() => {
    setPage(1);
  }, [items]);

  return (
    <Container>
      {slicedItems.map(item => (
        <Row
          key={item.id}
          imageSrc={item.avatar}
          name={item.name}
          role={item.role}
          company={item.company}
          id={item.id}
        />
      ))}

      {items.length > itemsPerPage && (
        <PaginationWrapper>
          <Pagination
            itemsCount={items.length}
            itemsPerPage={itemsPerPage}
            onChange={(active) => setPage(active)}
            active={page}
          />
        </PaginationWrapper>
      )}
    </Container>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any),
  itemsPerPage: PropTypes.number,
};

List.defaultProps = {
  items: [],
  itemsPerPage: 10,
};

export default List;
