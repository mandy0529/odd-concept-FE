import React from 'react';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMoveImmutable from 'array-move';
import useStore from '../store';

const SortableItem = SortableElement(({region, sortIndex, onRemove}) => {
  return (
    <div
      className="region"
      style={{
        boxShadow: `0 0 5px ${region.color}`,
        border: `1px solid ${region.color}`,
      }}
    >
      ✓ {region.id}
      {/* <button
        onClick={() => {
          onRemove(region.id);
        }}
      >
        Delete
      </button> */}
    </div>
  );
});

const SortableList = SortableContainer(({items, onRemove}) => {
  return (
    <div className="regions-list">
      {items.map((region, index) => (
        <SortableItem
          key={index}
          index={index}
          region={region}
          // onRemove={onRemove}
          // sortIndex={index}
        />
      ))}
    </div>
  );
});

function RegionList() {
  const regions = useStore((s) => s.regions);
  const setRegions = useStore((s) => s.setRegions);
  return (
    <SortableList
      items={regions}
      // onSortEnd={({oldIndex, newIndex}) => {
      //   setRegions(arrayMoveImmutable(regions, oldIndex, newIndex));
      // }}
      // onRemove={(index) => {
      //   regions(index);
      //   setRegions(regions.concat());
      // }}
    />
  );
}

export default RegionList;
