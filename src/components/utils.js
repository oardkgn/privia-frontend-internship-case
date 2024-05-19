export const capitalizeFirstLetter  = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const roles = [
    { value: "contributor", label: "Contributor" },
    { value: "subscriber", label: "Subscriber" },
    { value: "author", label: "Author" },
    { value: "administrator", label: "Administrator" },
  ];

export const profileImages = [
    { id: 1, src: "profile1.png" },
    { id: 2, src: "profile2.png" },
    { id: 3, src: "profile3.png" },
    { id: 4, src: "profile4.png" },
    { id: 5, src: "profile5.png" },
    { id: 6, src: "profile6.png" },
  ];

  // table sorting functions
  export function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  export function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  export function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
  
