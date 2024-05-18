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
