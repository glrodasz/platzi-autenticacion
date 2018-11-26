import React from "react";
import { Table, Button } from "semantic-ui-react";

const IndexPage = () => {
  return (
    <div>
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Playlist</Table.HeaderCell>
            <Table.HeaderCell>Author</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Guillermo's playlist</Table.Cell>
            <Table.Cell>
              Creatine supplementation is the reference compound for increasing
              muscular creatine levels; there is variability in this increase,
              however, with some nonresponders.
            </Table.Cell>
            <Table.Cell>3aOaGXIkE0Lnq9UIh1AgJB</Table.Cell>
            <Table.Cell>Guillermo Rodas</Table.Cell>
            <Table.Cell>
              <Button color="red">Delete</Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Guillermo's playlist</Table.Cell>
            <Table.Cell>
              Creatine supplementation is the reference compound for increasing
              muscular creatine levels; there is variability in this increase,
              however, with some nonresponders.
            </Table.Cell>
            <Table.Cell>3aOaGXIkE0Lnq9UIh1AgJB</Table.Cell>
            <Table.Cell>Guillermo Rodas</Table.Cell>
            <Table.Cell>
              <Button color="red">Delete</Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default IndexPage;
