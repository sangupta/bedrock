import React from 'react';
import Form from '../components/form/Form';
import TextInput from '../components/form/TextInput';

export interface Address {
    line1: string;
    line2: string;
    line3?: string;
    city: string;
    state: string;
    zip: string;
    phone?: string;
}

interface AddressBoxProps {
    /**
     * The form name to use
     */
    formName?: string;

    /**
     * Should we display a line3 in box?
     */
    allowLine3?: boolean;

    /**
     * Should we display a line for phone?
     */
    allowPhone?: boolean;

    address?: Address;

    /**
     * Handler called when address is updated
     */
    onAddressChange?: (address: Address) => void;
}

/**
 * A simple address box component.
 * 
 * @author sangupta
 */
export default class AddressBox extends React.Component<AddressBoxProps> {

    static defaultProps = {
        allowLine3: false,
        allowPhone: true,
        address: {}
    }

    render() {
        const { formName, allowLine3, onAddressChange, allowPhone, address } = this.props;
        return <div className='address-container'>
            <Form name={formName} onUpdate={onAddressChange} className='form-container'>
                <TextInput name='line1' placeholder='Address line 1' value={address?.line1} />
                <TextInput name='line2' placeholder='Address line 2' value={address?.line2} />
                {allowLine3 ? <TextInput name='line3' placeholder='Address line 3' value={address?.line3} /> : ''}
                <div className='row'>
                    <div className='col'>
                        <TextInput name='city' placeholder='City' value={address?.city} />
                    </div>
                    <div className='col'>
                        <TextInput name='state' placeholder='State' value={address?.state} />
                    </div>
                    <div className='col'>
                        <TextInput name='zip' placeholder='Zip' value={address?.zip} />
                    </div>
                </div>
                {allowPhone ? <TextInput name='phone' placeholder='Phone' value={address?.phone} /> : ''}
            </Form>
        </div>
    }
}
