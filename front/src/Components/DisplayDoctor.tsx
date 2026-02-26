interface Doctor {
  id: number;
  name: string;
  firstname: string;
  speciality: string;
  street: string;
  town: string;
  postale_code: string;
  tag: string;
}

interface DisplayDoctorProps {
  cardDoctor: Doctor[];
  searchTerm: string;
}

export const DisplayDoctor = ({
  cardDoctor,
  searchTerm,
}: DisplayDoctorProps) => {
  return (
    <section className="display-doctor">
      {cardDoctor
        .filter((doctor) => {
          const searchWord = searchTerm.trim().toLowerCase();
          const speciality = doctor.speciality ?? "";
          const town = doctor.town ?? "";
          const postale_code = doctor.postale_code ?? "";

          return (
            speciality.startsWith(searchWord) ||
            town.startsWith(searchWord) ||
            postale_code.includes(searchWord)
          );
        })
        .map((doctor) => {
          return (
            <div key={doctor.id}>
              <ul className="card-doctor">
                <li>
                  Dr {doctor.name} {doctor.firstname}
                </li>
                <li>{doctor.speciality}</li>
                <li>
                  {doctor.street}, {doctor.town}
                </li>
                <li>{doctor.postale_code}</li>
              </ul>
              <ul className="card-tag">
                <li>{doctor.tag}</li>
              </ul>
            </div>
          );
        })}
    </section>
  );
};
