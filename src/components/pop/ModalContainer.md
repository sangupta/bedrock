```js
import Button from './../button/Button';

initialState = { modalOpen : false }

toggleModal = () => {
    setState(state => { 
        return { 
            modalOpen : !(state.modalOpen || false)
        };
    })
}

<React.Fragment>
    <Button label='Open Modal' onClick={ this.toggleModal } />
    <ModalContainer open={state.modalOpen}>
        <div className="modal-header">
            <h5 className="modal-title" >Modal title</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
            </button>
        </div>
        <div className="modal-body">
            <p>Woohoo, you're reading this text in a modal!</p>
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
        </div>
    </ModalContainer>
</React.Fragment>
```
