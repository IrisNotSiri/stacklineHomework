import React from 'react';
import Divider from '@mui/material/Divider';


function ProductInfo({ title, subtitle, image, tags }) {
	const styles = {
		constainer: {
			paddingTop: '15px'
		},
		subtitle: {
			fontSize: '12px',
			color:'#b3b3b3',
		},
		imgStyle: {
			width: '50%'
		},
		imgContainer: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
		titleContainer: {
			textAlign: 'center',
		},
		tagGroup: {
			marginBottom: '15px',
			padding: '0px 10px',
		},
		tagStyle: {
			display: 'inline-block',
			padding: '4px 12px',
			marginRight: '5px',
			border: '1px solid #D3D3D3',
			borderRadius: '4px',
			marginTop: '15px',
		}
	}
  return (
    <div style={styles.constainer}>
      <div style={styles.imgContainer}>
				<img src={image} alt={title} style={styles.imgStyle} />
			</div>
      <div style={styles.titleContainer}>
				<h4>{title}</h4>
      	<p style={styles.subtitle}>{subtitle}</p>
			</div>
			<Divider />
      <div style={styles.tagGroup}>
        {tags && tags.map((tag) => (
          <span 
            key={tag} 
            style={styles.tagStyle}
          >
            {tag}
          </span>
        ))}
      </div>
			<Divider />
    </div>
  );
}

export default ProductInfo;
