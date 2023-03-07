import { render } from '@testing-library/react';
import { ByteSize } from './../../../src'

describe('ByteSize', () => {
    test('should render a byte size in B format', () => {
        const { getByText } = render(<ByteSize bytes={1024} />);
        expect(getByText('1024 B')).toBeInTheDocument();
    });

    test('should render a byte size in KB format', () => {
        const { getByText } = render(<ByteSize bytes={1024 * 1024} />);
        expect(getByText('1.00 KB')).toBeInTheDocument();
    });

    test('should render a byte size in MB format', () => {
        const { getByText } = render(<ByteSize bytes={1024 * 1024 * 1024} />);
        expect(getByText('1.00 MB')).toBeInTheDocument();
    });

    test('should render a byte size in GB format', () => {
        const { getByText } = render(<ByteSize bytes={1024 * 1024 * 1024 * 1024} />);
        expect(getByText('1.00 GB')).toBeInTheDocument();
    });

    test('should render a byte size in TB format', () => {
        const { getByText } = render(<ByteSize bytes={1024 * 1024 * 1024 * 1024 * 1024} />);
        expect(getByText('1.00 TB')).toBeInTheDocument();
    });

    test('should render a byte size in PB format', () => {
        const { getByText } = render(<ByteSize bytes={1024 * 1024 * 1024 * 1024 * 1024 * 1024} />);
        expect(getByText('1.00 PB')).toBeInTheDocument();
    });

    test('should render a byte size in EB format', () => {
        const { getByText } = render(<ByteSize bytes={1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024} />);
        expect(getByText('1.00 EB')).toBeInTheDocument();
    });

    test('should render a byte size in ZB format', () => {
        const { getByText } = render(<ByteSize bytes={1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024} />);
        expect(getByText('1.00 ZB')).toBeInTheDocument();
    });

    test('should render a byte size in YB format', () => {
        const { getByText } = render(<ByteSize bytes={1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024} />);
        expect(getByText('1.00 YB')).toBeInTheDocument();
    });
});