import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import logo from "../photos/logo.svg";
import { MainDiv, Img, DivButton } from "../styled-components/Stepper";

const useStyles = makeStyles((theme) => ({
  root: {
    
    width: "80%",
    height: "50%",
    paddingLeft : "10%"
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(1),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  texte: {
   color : "blue",
  },
}));

function getSteps() {
  return [
    "Présentation",
    "Conseils de mise en place",
    "Répartition du temps d'enregistrement",
    "Enregistrement",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return ``;
    case 1:
      return "";
    case 2:
      return ``;

    default:
      return "";
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <MainDiv>
      <Img src={logo} alt="" />
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel className={classes.texte}>{label}</StepLabel>
              <StepContent>
                <Typography >{getStepContent(index)}</Typography>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Typography></Typography>
            <Button onClick={handleReset} className={classes.button}>
              Recommencer
            </Button>
          </Paper>
        )}
        
        <div className={classes.actionsContainer}>
          
          
          
          
          <DivButton>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              className={classes.button}
            >
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              className={classes.button}
            >
              {activeStep === steps.length - 1 ? "Terminé" : "Suivant"}
            </Button>
          </DivButton>
        </div>
      </div>
    </MainDiv>
  );
}
