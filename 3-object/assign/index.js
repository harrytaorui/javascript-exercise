export default function addSerialNumber(source) {
  const result = Object.assign(source, {
    serialNumber: '12345',
    properties: {
      color: 'green',
      status: 'processed'
    }
  });
  return result;
}
