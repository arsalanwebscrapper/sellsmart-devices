import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Monitor, Smartphone, Battery, Box, AlertCircle, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { DeviceData } from "@/pages/SellDevice";

type ConditionOption = {
  id: string;
  label: string;
  description: string;
  deduction: number;
  icon?: React.ReactNode;
};

const screenConditions: ConditionOption[] = [
  { id: "flawless", label: "Flawless", description: "No scratches or marks", deduction: 0 },
  { id: "minor-scratches", label: "Minor Scratches", description: "Light scratches visible on close inspection", deduction: 5 },
  { id: "visible-scratches", label: "Visible Scratches", description: "Clearly visible scratches", deduction: 15 },
  { id: "cracked", label: "Cracked/Broken", description: "Screen is cracked or damaged", deduction: 40 },
];

const bodyConditions: ConditionOption[] = [
  { id: "like-new", label: "Like New", description: "No visible wear", deduction: 0 },
  { id: "good", label: "Good", description: "Minor signs of use", deduction: 5 },
  { id: "fair", label: "Fair", description: "Visible scratches/dents", deduction: 15 },
  { id: "poor", label: "Poor", description: "Heavy wear, dents, or damage", deduction: 30 },
];

const batteryHealth: ConditionOption[] = [
  { id: "excellent", label: "Excellent (80%+)", description: "Battery health above 80%", deduction: 0 },
  { id: "good", label: "Good (60-80%)", description: "Battery health between 60-80%", deduction: 10 },
  { id: "poor", label: "Poor (Below 60%)", description: "Battery health below 60%", deduction: 20 },
];

const functionalIssues: ConditionOption[] = [
  { id: "touchscreen", label: "Touchscreen Issues", description: "Touch not working properly", deduction: 20 },
  { id: "camera", label: "Camera Issues", description: "Front or back camera not working", deduction: 15 },
  { id: "speaker", label: "Speaker/Mic Issues", description: "Audio problems", deduction: 10 },
  { id: "buttons", label: "Button Issues", description: "Power or volume buttons not working", deduction: 10 },
  { id: "wifi", label: "WiFi/Bluetooth Issues", description: "Connectivity problems", deduction: 15 },
  { id: "charging", label: "Charging Issues", description: "Charging port problems", deduction: 15 },
];

const accessories: ConditionOption[] = [
  { id: "box", label: "Original Box", description: "With original packaging", deduction: -3 },
  { id: "charger", label: "Original Charger", description: "With original charging adapter", deduction: -2 },
  { id: "earphones", label: "Original Earphones", description: "With original earphones", deduction: -1 },
  { id: "bill", label: "Original Bill", description: "With purchase invoice", deduction: -2 },
];

type ConditionAssessmentProps = {
  deviceData: DeviceData;
  onComplete: (conditions: DeviceData["conditions"], finalPrice: number) => void;
  onBack: () => void;
};

const ConditionAssessment = ({ deviceData, onComplete, onBack }: ConditionAssessmentProps) => {
  const [screen, setScreen] = useState("");
  const [body, setBody] = useState("");
  const [battery, setBattery] = useState("");
  const [issues, setIssues] = useState<string[]>([]);
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([]);

  const toggleIssue = (issueId: string) => {
    setIssues((prev) =>
      prev.includes(issueId)
        ? prev.filter((id) => id !== issueId)
        : [...prev, issueId]
    );
  };

  const toggleAccessory = (accessoryId: string) => {
    setSelectedAccessories((prev) =>
      prev.includes(accessoryId)
        ? prev.filter((id) => id !== accessoryId)
        : [...prev, accessoryId]
    );
  };

  // Calculate deductions
  const screenDeduction = screenConditions.find((s) => s.id === screen)?.deduction || 0;
  const bodyDeduction = bodyConditions.find((b) => b.id === body)?.deduction || 0;
  const batteryDeduction = batteryHealth.find((b) => b.id === battery)?.deduction || 0;
  const issuesDeduction = issues.reduce((sum, issueId) => {
    const issue = functionalIssues.find((i) => i.id === issueId);
    return sum + (issue?.deduction || 0);
  }, 0);
  const accessoryBonus = selectedAccessories.reduce((sum, accId) => {
    const acc = accessories.find((a) => a.id === accId);
    return sum + (acc?.deduction || 0);
  }, 0);

  const totalDeduction = screenDeduction + bodyDeduction + batteryDeduction + issuesDeduction + accessoryBonus;
  const finalPrice = Math.max(
    Math.round(deviceData.basePrice * (1 - totalDeduction / 100)),
    Math.round(deviceData.basePrice * 0.2)
  );

  const isComplete = screen && body && battery;

  const handleSubmit = () => {
    if (!isComplete) return;
    onComplete(
      {
        screenCondition: screen,
        bodyCondition: body,
        batteryHealth: battery,
        functionalIssues: issues,
        accessories: selectedAccessories,
      },
      finalPrice
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto"
    >
      <Button
        variant="ghost"
        onClick={onBack}
        className="mb-4 text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Variants
      </Button>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Assessment Form */}
        <div className="lg:col-span-2 space-y-8">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Tell Us About Your Device
            </h1>
            <p className="text-muted-foreground">
              Answer honestly for an accurate quote — no surprises later!
            </p>
          </div>

          {/* Screen Condition */}
          <div className="bg-card rounded-2xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Monitor className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Screen Condition</h3>
                <p className="text-sm text-muted-foreground">How is your screen?</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {screenConditions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setScreen(option.id)}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    screen === option.id
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/30"
                  }`}
                >
                  <p className="font-semibold text-foreground text-sm">{option.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{option.description}</p>
                  {option.deduction > 0 && (
                    <p className="text-xs text-destructive mt-2">-{option.deduction}%</p>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Body Condition */}
          <div className="bg-card rounded-2xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Body Condition</h3>
                <p className="text-sm text-muted-foreground">How is the physical body?</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {bodyConditions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setBody(option.id)}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    body === option.id
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/30"
                  }`}
                >
                  <p className="font-semibold text-foreground text-sm">{option.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{option.description}</p>
                  {option.deduction > 0 && (
                    <p className="text-xs text-destructive mt-2">-{option.deduction}%</p>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Battery Health */}
          <div className="bg-card rounded-2xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Battery className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Battery Health</h3>
                <p className="text-sm text-muted-foreground">Check in Settings → Battery</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {batteryHealth.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setBattery(option.id)}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    battery === option.id
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/30"
                  }`}
                >
                  <p className="font-semibold text-foreground text-sm">{option.label}</p>
                  {option.deduction > 0 && (
                    <p className="text-xs text-destructive mt-2">-{option.deduction}%</p>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Functional Issues */}
          <div className="bg-card rounded-2xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-destructive/10 rounded-xl flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-destructive" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Any Functional Issues?</h3>
                <p className="text-sm text-muted-foreground">Select all that apply (if any)</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {functionalIssues.map((option) => (
                <button
                  key={option.id}
                  onClick={() => toggleIssue(option.id)}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    issues.includes(option.id)
                      ? "border-destructive bg-destructive/5"
                      : "border-border hover:border-destructive/30"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-foreground text-sm">{option.label}</p>
                    {issues.includes(option.id) && (
                      <Check className="w-4 h-4 text-destructive" />
                    )}
                  </div>
                  <p className="text-xs text-destructive mt-1">-{option.deduction}%</p>
                </button>
              ))}
            </div>
          </div>

          {/* Accessories */}
          <div className="bg-card rounded-2xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                <Box className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Accessories Available?</h3>
                <p className="text-sm text-muted-foreground">Get bonus for original accessories</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {accessories.map((option) => (
                <button
                  key={option.id}
                  onClick={() => toggleAccessory(option.id)}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    selectedAccessories.includes(option.id)
                      ? "border-accent bg-accent/5"
                      : "border-border hover:border-accent/30"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-foreground text-sm">{option.label}</p>
                    {selectedAccessories.includes(option.id) && (
                      <Check className="w-4 h-4 text-accent" />
                    )}
                  </div>
                  <p className="text-xs text-accent mt-1">+{Math.abs(option.deduction)}% bonus</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Sticky Price Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-card rounded-2xl p-6 border border-border shadow-elevated"
            >
              <h3 className="font-bold text-foreground mb-4">Price Breakdown</h3>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Base Price</span>
                  <span className="font-semibold text-foreground">
                    ₹{deviceData.basePrice.toLocaleString()}
                  </span>
                </div>

                {screen && screenDeduction > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Screen Condition</span>
                    <span className="text-destructive">-{screenDeduction}%</span>
                  </div>
                )}

                {body && bodyDeduction > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Body Condition</span>
                    <span className="text-destructive">-{bodyDeduction}%</span>
                  </div>
                )}

                {battery && batteryDeduction > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Battery Health</span>
                    <span className="text-destructive">-{batteryDeduction}%</span>
                  </div>
                )}

                {issuesDeduction > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Functional Issues</span>
                    <span className="text-destructive">-{issuesDeduction}%</span>
                  </div>
                )}

                {accessoryBonus < 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Accessories Bonus</span>
                    <span className="text-accent">+{Math.abs(accessoryBonus)}%</span>
                  </div>
                )}
              </div>

              <div className="border-t border-border pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-foreground">Your Price</span>
                  <span className="text-3xl font-bold text-accent">
                    ₹{finalPrice.toLocaleString()}
                  </span>
                </div>
              </div>

              <Button
                variant="price"
                size="lg"
                className="w-full"
                disabled={!isComplete}
                onClick={handleSubmit}
              >
                Get Final Quote
              </Button>

              {!isComplete && (
                <p className="text-xs text-muted-foreground text-center mt-3">
                  Complete all required sections to proceed
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ConditionAssessment;
