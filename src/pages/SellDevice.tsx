import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BrandSelection from "@/components/sell/BrandSelection";
import ModelSelection from "@/components/sell/ModelSelection";
import VariantSelection from "@/components/sell/VariantSelection";
import ConditionAssessment from "@/components/sell/ConditionAssessment";
import FinalQuote from "@/components/sell/FinalQuote";
import StepIndicator from "@/components/sell/StepIndicator";

export type DeviceData = {
  category: string;
  brand: string;
  model: string;
  variant: string;
  basePrice: number;
  conditions: {
    screenCondition: string;
    bodyCondition: string;
    batteryHealth: string;
    functionalIssues: string[];
    accessories: string[];
  };
  finalPrice: number;
};

const SellDevice = () => {
  const [searchParams] = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [deviceData, setDeviceData] = useState<DeviceData>({
    category: searchParams.get("category") || "mobile",
    brand: "",
    model: "",
    variant: "",
    basePrice: 0,
    conditions: {
      screenCondition: "",
      bodyCondition: "",
      batteryHealth: "",
      functionalIssues: [],
      accessories: [],
    },
    finalPrice: 0,
  });

  const steps = [
    { number: 1, title: "Select Brand" },
    { number: 2, title: "Select Model" },
    { number: 3, title: "Choose Variant" },
    { number: 4, title: "Device Condition" },
    { number: 5, title: "Get Quote" },
  ];

  const updateDeviceData = (updates: Partial<DeviceData>) => {
    setDeviceData((prev) => ({ ...prev, ...updates }));
  };

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <BrandSelection
            category={deviceData.category}
            selectedBrand={deviceData.brand}
            onSelect={(brand) => {
              updateDeviceData({ brand, model: "", variant: "" });
              nextStep();
            }}
          />
        );
      case 2:
        return (
          <ModelSelection
            brand={deviceData.brand}
            selectedModel={deviceData.model}
            onSelect={(model, basePrice) => {
              updateDeviceData({ model, basePrice });
              nextStep();
            }}
            onBack={prevStep}
          />
        );
      case 3:
        return (
          <VariantSelection
            brand={deviceData.brand}
            model={deviceData.model}
            selectedVariant={deviceData.variant}
            basePrice={deviceData.basePrice}
            onSelect={(variant, adjustedPrice) => {
              updateDeviceData({ variant, basePrice: adjustedPrice });
              nextStep();
            }}
            onBack={prevStep}
          />
        );
      case 4:
        return (
          <ConditionAssessment
            deviceData={deviceData}
            onComplete={(conditions, finalPrice) => {
              updateDeviceData({ conditions, finalPrice });
              nextStep();
            }}
            onBack={prevStep}
          />
        );
      case 5:
        return <FinalQuote deviceData={deviceData} onBack={prevStep} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-secondary">
      <Header />
      <main className="py-6 md:py-10">
        <div className="container">
          <StepIndicator steps={steps} currentStep={currentStep} />
          <div className="mt-8">{renderStep()}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SellDevice;
