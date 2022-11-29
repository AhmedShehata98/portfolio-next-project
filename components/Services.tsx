import React from "react";
import ServItems from "./ServItems";

const Services = () => {
  return (
    <div className="flex flex-col relative z-10">
      <h4 className="mt-2 mb-4 uppercase text-white text-lg font-bold">
        services
      </h4>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <ServItems
          title="web development"
          description=" Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Sed Distinctio Iste Ipsa Quidem Fugiat. Itaque Ea Accusamus Laboriosam Suscipit Sint Aperiam "
          link="/contact"
        />
        <ServItems
          title="responive design"
          description=" Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Sed Distinctio Iste Ipsa Quidem Fugiat. Itaque Ea Accusamus "
          link="/contact"
        />
        <ServItems
          title="team working"
          description=" Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Sed Distinctio Iste Ipsa Quidem "
          link="/contact"
        />
        <ServItems
          title="creative ideas"
          description=" Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Sed Distinctio Iste Ipsa Quidem Fugiat. Itaque Ea Accusamus Laboriosam Suscipit Sint Aperiam Quaerat, Quidem Reiciendis Molestiae!"
          link="/contact"
        />
        <ServItems
          title="Problems solving"
          description=" Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Sed Distinctio Iste Ipsa Quidem Fugiat. Itaque Ea Accusamus Laboriosam Suscipit Sint Aperiam Quaerat, Quidem Reiciendis Molestiae!"
          link="/contact"
        />
        <ServItems
          title="flixable working"
          description=" Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Sed Distinctio Iste Ipsa Quidem Fugiat. Itaque Ea Accusamus Laboriosam Suscipit Sint Aperiam Quaerat, Quidem Reiciendis Molestiae!"
          link="/contact"
        />
      </ul>
    </div>
  );
};

export default Services;
