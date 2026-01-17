import { motion } from "framer-motion";
import { Check } from "lucide-react";

type Step = {
  number: number;
  title: string;
};

type StepIndicatorProps = {
  steps: Step[];
  currentStep: number;
};

const StepIndicator = ({ steps, currentStep }: StepIndicatorProps) => {
  return (
    <div className="bg-card rounded-2xl p-4 md:p-6 shadow-card">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center flex-1">
            {/* Step circle */}
            <div className="flex flex-col items-center">
              <motion.div
                initial={false}
                animate={{
                  scale: currentStep === step.number ? 1.1 : 1,
                }}
                className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-sm md:text-base transition-colors ${
                  currentStep > step.number
                    ? "bg-accent text-accent-foreground"
                    : currentStep === step.number
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                {currentStep > step.number ? (
                  <Check className="w-5 h-5" />
                ) : (
                  step.number
                )}
              </motion.div>
              <span
                className={`hidden md:block mt-2 text-xs font-medium transition-colors ${
                  currentStep >= step.number
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {step.title}
              </span>
            </div>

            {/* Connector line */}
            {index < steps.length - 1 && (
              <div className="flex-1 h-1 mx-2 md:mx-4 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: currentStep > step.number ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.3 }}
                  className="h-full bg-accent"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile step title */}
      <p className="md:hidden text-center mt-4 font-medium text-foreground">
        Step {currentStep}: {steps[currentStep - 1]?.title}
      </p>
    </div>
  );
};

export default StepIndicator;
