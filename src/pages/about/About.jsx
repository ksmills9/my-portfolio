import PageHeader from "../../components/PageHeader";
import { AnimatedBackground } from "animated-backgrounds";
import meImage from "../../images/kevin-profile.jpeg"
import { motion } from "framer-motion";

const About = ({}) => {
	const styles = {
		innerContainer: {
			display: "flex",
			flexDirection: "row",
			width: "100%",
			justifyContent: "center"
		},

		imageContainer: {
			width: "50%"
		},
		
	}
	return (
		<>
			<main className="container about">
			<AnimatedBackground animationName="neuralNetwork"/>
				{/* Display the page header */}
        <PageHeader title="About" />

				<div className="innerContainer" style={styles.innerContainer}>
					
					<div className="imageContainer" style={styles.imageContainer}>
						<motion.img
							initial={{x: -100, opacity: 0}}
							animate={{y: 0, opacity: 1}}
							transition={{ duration: 0.8, ease: "easeInOut" }}
							src={meImage}
						/>
					</div>
					<motion.p
						className="contentDescription"
						initial={{x: -100, opacity: 0}}
						animate={{y: 0, opacity: 1}}
					>
						Some text here
					</motion.p>
				</div>
				
			</main>
		</>
	);
};

export default About;