import React from 'react';
import { Modal } from 'react-bootstrap/';
import { Button } from 'react-bootstrap/';
import { Form } from 'react-bootstrap/';
import parseStringToHTML from 'html-react-parser';
// import _ from 'lodash';

// const parser = new DOMParser();

// console.log(parser);

export const MyModal = (props) => {
  // console.log('mtModal', props, props.modalData);

  const { show, onHide, modalType, buttonTexts, submitHandler } = props;

  // console.log('popupData', modalType, popupData);

  // const modalData = props.modalData || { title: '', body: { text: '' }, footer: '' };
  const popupData = props.popupData || { title: '', body: { text: '' }, footer: '' };

  const setSize = (modalType) => {
    switch (modalType) {
      case 'email':
        return 'md';
      case 'blog':
        return 'sm';
      case 'about':
        return 'lg';
      case '':
        return 'sm';
      default:
        throw new Error("cann't get modal type");
    }
  };

  const bodyHeader = popupData.body.text.header || '';
  const bodyParagraphs = popupData.body.text.p || '';
  // console.log()
  // console.log('popupData.title.text', popupData, popupData.title.text);

  return (
    <Modal
      onHide={onHide}
      show={show}
      size={setSize(modalType)}
      className='Modal'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      contentClassName='rounded-0 p-0'
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>{popupData.title.text}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {modalType === 'email' ? (
          <Form onSubmit={submitHandler} className={'text-body p-1'}>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>{bodyHeader}</Form.Label>
              <Form.Control
                type='email'
                name='email'
                placeholder={popupData.body.text.emailFieldPlaceholder}
              />
              <Form.Text className='text-muted'>
                {popupData.body.text.emailFieldDisclaimer}
              </Form.Text>
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Control
                as='textarea'
                name='text'
                placeholder={popupData.body.text.textAreaPlaceholder}
                className='m-0 p-1 p-md-2'
                rows='3'
              />
            </Form.Group>

            <div className='m-0 p-1'>
              {popupData.footer.text}{' '}
              <a href={`mailto:${popupData.footer.email}`}>{popupData.footer.email}</a>
            </div>

            <div className='d-flex justify-content-end'>
              <Button
                className='btn btn-sm rounded-0 my-1 me-2 py-1 px-3 m-md-2 mt-md-3'
                variant='outline-primary'
                type='submit'
              >
                {buttonTexts.submitButton}
              </Button>
              <Button
                className='btn btn-outline-secondary btn-sm rounded-0 my-1 me-4 py-1 px-3 m-md-2 mt-md-3'
                variant='outline-secondary'
                type='button'
                data-bs-dismiss='modal'
                onClick={props.onHide}
              >
                {buttonTexts.closeButton}
              </Button>
            </div>
          </Form>
        ) : (
          <React.Fragment>
            <h4>{bodyHeader}</h4>
            {parseStringToHTML(bodyParagraphs)}
          </React.Fragment>
        )}
      </Modal.Body>

      {modalType === 'email' ? null : (
        <Modal.Footer>
          <Button
            variant='outline-secondary'
            className='btn btn-outline-secondary btn-sm rounded-0 my-1 me-4 py-1 px-3 m-md-2 mt-md-3'
            onClick={props.onHide}
          >
            {buttonTexts.closeButton}
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  );
};
