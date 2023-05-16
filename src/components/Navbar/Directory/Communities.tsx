import React, { useState } from "react";
import { Flex, Icon, MenuItem } from "@chakra-ui/react";

import { GrAdd } from "react-icons/gr";
import CreateCommunityModal from "../../Modal/CreateCommunity/CreateCommunityModal";

type CommunitiesProps = {};

const Communities: React.FC<CommunitiesProps> = () => {
  const [open, SetOpen] = useState(false);
  return (
    <>
      <CreateCommunityModal open={open} />
      <MenuItem
        width="100%"
        fontSize="10pt"
        _hover={{ bg: "gray.100" }}
        onClick={() => SetOpen(true)}
      >
        <Flex align="center">
          <Icon fontSize={20} mr={2} as={GrAdd} />
          Create Community
        </Flex>
      </MenuItem>
    </>
  );
};
export default Communities;
