import { IoLibraryOutline ,IoCarSportOutline } from "react-icons/io5";
import { PiSecurityCameraDuotone ,PiWarehouseLight ,PiSwimmingPoolLight  } from "react-icons/pi";
import { LiaBedSolid } from "react-icons/lia";
import { TbPlayBasketball } from "react-icons/tb";
import { CiMedicalCase } from "react-icons/ci";

const AmenitiesData = [
    {
        id: 1,
        title: "Parking Space",
        cover: <IoCarSportOutline />,
        color:"white"
    },
    {
        id: 2,
        title: "Library Area",
        cover: <IoLibraryOutline />,
        color:"#fff6e2"
    },
    {
        id: 3,
        title: "Private Security",
        cover: <PiSecurityCameraDuotone />,
        color:"white"
    },
    {
        id: 4,
        title: "Smart House",
        cover: <PiWarehouseLight   />,
        color:"#fff6e2"
    },
    {
        id: 6,
        title: "King Size Beds",
        cover: <LiaBedSolid />,
        color:"white"
    },
    {
        id: 5,
        title: "Swimming Pool",
        cover: <PiSwimmingPoolLight  />,
        color:"#fff6e2"
    },
    {
        id: 8,
        title: "Medical Center",
        cover: <CiMedicalCase />,
        color:"white"
    },
    {
        id: 7,
        title: "Kids Play",
        cover: <TbPlayBasketball />,
        color:"#fff6e2"
    },
    {
        id: 9,
        title: "Medical Center",
        cover: <CiMedicalCase />,
        color:"white"
    },
    {
        id: 10,
        title: "Medical Center",
        cover: <CiMedicalCase />,
        color:"#fff6e2"
    },
]

export default AmenitiesData