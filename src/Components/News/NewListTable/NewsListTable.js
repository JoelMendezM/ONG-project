import React from 'react';
import { Link } from "react-router-dom";
import {
    VStack,
    Container,
    Heading,
    Flex,
    Box,
    Spacer,
    Button,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td
} from '@chakra-ui/react';


const NewListTable = ({ data }) => {

    return (
        <VStack>
            <Container maxW='container.lg'>
                <Flex margin={10}>
                    <Box p='2'>
                        <Heading size='md'>Listado de Novedades</Heading>
                    </Box>
                    <Spacer />
                    <Box>
                        <Link to="/backoffice/news/create">
                            <Button colorScheme='teal' mr='4'>
                                Crear Novedad
                            </Button>
                        </Link>
                    </Box>
                </Flex>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>Nombre</Th>
                            <Th>Imagen</Th>
                            <Th>Creado en</Th>
                            <Th>Editar</Th>
                            <Th>Eliminar</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data.map((tableContent) => {
                            return (
                                <Tr key={tableContent.id}>
                                    <Td>{tableContent.name}</Td>
                                    <Td>{tableContent.image}</Td>
                                    <Td>{tableContent.createdAt}</Td>
                                    <Td>
                                        <Button colorScheme='blue'>Editar</Button>
                                    </Td>
                                    <Td>
                                        <Button colorScheme='red'>Eliminar</Button>
                                    </Td>
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
            </Container>
        </VStack>
    )
}

export default NewListTable;