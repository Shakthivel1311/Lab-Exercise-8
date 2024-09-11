import React from "react";
import Card from "./Card";

const CardList = () => {
    const cards = [
        {
            title: "Luxury Taxi Service",
            features: ["Premium vehicles", "24/7 availability", "Personalized service"],
            image: "https://www.metrowestcarservice.com/wp-content/uploads/2020/05/4-1.jpg.webp",
        },
        {
            title: "Budget Taxi Service",
            features: ["Affordable rates", "Flexible booking", "Clean vehicles"],
            image: "https://media.istockphoto.com/id/1217653269/es/foto/conductor-feliz-de-un-servicio-de-solicitud-de-coche-que-conduce-a-una-mujer.jpg?s=612x612&w=0&k=20&c=hQ-HdRLm43oTyWzOuxDyD-UO4La-XoGTstMzg4J4ucU=",
        },
        {
            title: "Airport Transfer",
            features: ["Airport pick-up and drop-off", "Flight monitoring", "Comfortable rides"],
            image: "https://www.ruby-services.com/en/images/5-good-reasons-to-use-a-limo-service-for-your-airport-transfers_pd40106w2440h1500rcrop_559.jpg",
        },
        {
            title: "Corporate Taxi Service",
            features: ["Business-class vehicles", "Priority booking", "Professional drivers"],
            image: "https://www.sreegroups.net/assets/img/gallery/8.jpg",
        },
        {
            title: "Family Taxi Service",
            features: ["Spacious vehicles", "Child seats available", "Affordable rates"],
            image: "https://www.jcrcab.com/wp-content/uploads/2023/02/taxi-in-udaipur-family.jpg",
        },
        {
            title: "Pet Taxi Service",
            features: ["Pet-friendly vehicles", "Safe and comfortable", "Professional drivers"],
            image: "https://static.toiimg.com/thumb/msid-69252366,width-1280,height-720,resizemode-72/69252366.jpg",
        },
        {
            title: "Night Taxi Service",
            features: ["Safe night travel", "24/7 availability", "Well-lit vehicles"],
            image: "https://www.seawatersports.com/img/newimage/activies/slide/taxi-service-in-goa.png",
        },
        {
            title: "Event Taxi Service",
            features: ["On-time arrivals", "Special event packages", "Comfortable rides"],
            image: "https://i.pinimg.com/736x/52/d2/5f/52d25fbe2c3e23580cd11fc57edaf3c4.jpg",
        },
    ];

    return (
        <div className="flex flex-wrap justify-center">
            {cards.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    features={card.features}
                    image={card.image}
                />
            ))}
        </div>
    );
};

export default CardList;
