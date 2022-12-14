export const HousingType = (type: string) => {
  switch (type) {
    case 'apartment':
      return 'Apartment';
    case 'room':
      return 'Private Room';
    case 'house':
      return 'House';
    case 'hotel':
      return 'Hotel';
    default:
      return 'Sorry, type not found';
  }
};
