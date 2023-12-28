import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronBarDown } from "react-icons/bs";
import useGameQueryStore from "./MyStore";

const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-added", label: "Date added" },
    { value: "created", label: "Created" },
    { value: "-updated", label: "Updated" },
    { value: "-rating", label: "Average rating" },
    { value: "-metacritic", label: "Popularity" },
  ];

  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        {currentSortOrder ? (
          <span>Order by: {currentSortOrder.label}</span>
        ) : (
          <span>Order by: Relevance</span>
        )}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => setSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
