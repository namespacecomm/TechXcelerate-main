import React from "react";
import "./ThemesCard.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { pdf } from '@react-pdf/renderer';


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90px',
    height: '90px',
    borderRadius: '30px',
    border: '2px solid white',
    marginRight:'10px',
    marginLeft:'10px',
    color: 'white',
    position: 'relative',
    transition: 'background-color 0.3s ease',
  },
  icon: {
    color: '#007bff', 
    fontSize: '1.7rem',
  },
  number: {
    fontSize: '1rem',
    marginTop: '0.5rem',
  },
};


function ThemesCard({
  image,
  title,
  gradientColor,
  gradientColorText,
  assignmentLink
}) {

  const navigate = useNavigate(); 


  const handlePreviewClick = (url) => {
    const pdfUrl = url;
    navigate("/pdf-preview", { state: { pdfUrl } });
  };

  return (
    <div className="ProjectCard relative rounded-lg mx-2 py-2">
      <div className="flex flex-col items-center justify-center">
        <div
          className={`ProjectBand absolute top-0 left-0 overflow-hidden h-[10px] w-full ${gradientColor}`}
        />
        <div className="pt-2">
          <img className="p-4 h-40 w-40" src={image} alt="sdg" />
        </div>
        
      </div>
      {Array.isArray(assignmentLink) && assignmentLink.length > 0 && (
        <div className="flex justify-center">
          {assignmentLink.map((link, index) => (
            <div key={index} className="pdf-icon" style={styles.container} onClick={ () => handlePreviewClick(link)}>
              <FontAwesomeIcon icon={faFilePdf} style={styles.icon} />
              <div style={styles.number} className="pdf-number">{index + 1}</div>
            </div>
          ))}
        </div>
      )}
      <div className="px-4 pb-2 flex flex-col">
        <h5
          className={`mb-2 text-[1.5rem] font-bold tracking-tight text-center ${gradientColorText}`}
        >
          {title}
        </h5>
        <hr className="text-[#767676] dark:text-[#767676]" />
      </div>
    </div>
  );
}

export default ThemesCard;
