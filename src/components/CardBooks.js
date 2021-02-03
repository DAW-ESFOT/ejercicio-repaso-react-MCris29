import logo from '../images/logo.svg';
import '../styles/App.css';
import React, {useState} from 'react';
import {Card, Button, Modal} from 'antd';


const {Meta} = Card;


function CardBooks({bookData}) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Card
                hoverable
                className={'cards'}
                style={{width: 240}}
                cover={<img alt="example" src={bookData.cover_page}/>}
            >
                <Meta
                    title={bookData.title}
                    description={bookData.author + "   $" + bookData.price}
                />
                <Button
                    type='primary'
                    className={'buttons'}
                    onClick={showModal}
                >
                    Ver más
                </Button>
                <Modal title="Libro" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <p><strong>Titulo:</strong> {bookData.title}</p>
                    <p><strong>Autor:</strong> {bookData.author}</p>
                    <p><strong>Precio:</strong> ${bookData.price}</p>
                    <p><strong>Páginas:</strong> {bookData.pages}</p>
                    <p><strong>Editorial:</strong> {bookData.editorial}</p>
                    <p><strong>Año de Edición:</strong> {bookData.year_edition}</p>
                    <p><strong>Sinopsis:</strong> {bookData.synopsis}</p>
                    <p>
                        <strong>Estado:</strong>
                        {
                            bookData.new
                                ? ' Nuevo'
                                : ' Usado'
                        }

                    </p>
                    <p>
                        <strong>Disponible:</strong>
                        {
                            bookData.available
                                ? ' Si'
                                : ' No'
                        }
                    </p>
                    <p><strong>Categoria:</strong> {bookData.category}</p>
                </Modal>
            </Card>
        </>
    );
}

export default CardBooks;