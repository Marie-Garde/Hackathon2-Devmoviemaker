import React, { useEffect } from "react";
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
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    height: "50%",
    paddingLeft: "10%",
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
    color: "blue",
  },
}));

function getSteps() {
  return [
    { title: "Présentation", action: "HOME" },
    { title: "Conseils de mise en place", action: "ADVICES" },
    { title: "Répartition du temps d'enregistrement", action: "TIME" },
    { title: "Enregistrement", action: "RECORD" },
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
  const dispatch = useDispatch();

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  useEffect(() => {
    console.log(activeStep);
    dispatch({ type: getSteps()[activeStep].action });
  }, [dispatch, activeStep]);

  return (
    <MainDiv>
      <Img src={logo} alt="" />
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label.title}>
              <StepLabel className={classes.texte}>{label.title}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
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
              disabled={activeStep === steps.length}
            >
              {activeStep === steps.length ? "Terminé" : "Suivant"}
            </Button>
          </DivButton>
        </div>
      </div>
    </MainDiv>
  );
}
