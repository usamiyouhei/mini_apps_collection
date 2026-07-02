"use client";
import { useEffect, useState } from "react";
import styles from "./dessert-idea-builder.module.scss";

import type { DessertIdea } from "@/types/dessert";
import DessertTypeStep from "@/components/dessert-builder/DessertTypeStep";
import FlavorStep from "@/components/dessert-builder/FlavorStep";
import ResultCard from "@/components/dessert-builder/ResultCard/ResultCard";
import TextureStep from "@/components/dessert-builder/TextureStep";
import TemperatureStep from "@/components/dessert-builder/TemperatureStep";
import DecorationStep from "@/components/dessert-builder/DecorationStep";
import SavedIdeaList from "@/components/dessert-builder/SavedIdeaList";
import { format } from "path";
import ShapeStep from "@/components/dessert-builder/ShapeStep";
import AIPromptPanel from "@/components/dessert-builder/AIPromptPanel/AIPromptPanel";
import ImageUploadPanel from "@/components/dessert-builder/ImageUploadPanel/ImageUploadPanel";
import { createDessertPrompt } from "@/utils/createDessertPrompt";

const STORAGE_KEY = "dessert-ideas";
const LAST_OPTION_STEP = 6;

export default function DessertBuilderPage() {
  const [step, setStep] = useState(0);

  const [selectedDessertTypes, setSelectedDessertTypes] = useState<string[]>(
    [],
  );
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([]);
  const [selectedShapes, setSelectedShapes] = useState<string[]>([]);
  const [selectedTextures, setSelectedTextures] = useState<string[]>([]);
  const [selectedTemperatures, setSelectedTemperatures] = useState<string[]>(
    [],
  );
  const [selectedDecorations, setSelectedDecorations] = useState<string[]>([]);

  const [result, setResult] = useState<DessertIdea | null>(null);
  // const [imageUrl, setImageUrl] = useState("");
  // const [imageFileDataUrl, setImageFileDataUrl] = useState("");

  const isResultStep = step >= LAST_OPTION_STEP;

  const aiPrompt = result ? createDessertPrompt(result) : "";

  //画面を開いた瞬間に、localStorage に保存されているデザート案を読み込んで、savedIdeas の初期値にする処理
  const [savedIdeas, setSavedIdeas] = useState<DessertIdea[]>(() => {
    if (typeof window === "undefined") return [];
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) return [];

    try {
      const parsedIdeas = JSON.parse(saved) as DessertIdea[];

      return parsedIdeas.map((idea) => ({
        ...idea,
        shapes: idea.shapes ?? [],
        favorite: idea.favorite ?? false,
      }));
    } catch {
      localStorage.removeItem(STORAGE_KEY);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedIdeas));
  }, [savedIdeas]);

  const toggleOption = (
    value: string,
    selectedValues: string[],
    setSelectedValues: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((item) => item !== value));
    } else {
      setSelectedValues([...selectedValues, value]);
    }
  };

  const goNext = () => {
    setStep((prev) => Math.min(prev + 1, LAST_OPTION_STEP));
  };

  const goBack = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const resetBuilder = () => {
    setStep(0);
    setSelectedDessertTypes([]);
    setSelectedFlavors([]);
    setSelectedTextures([]);
    setSelectedShapes([]);
    setSelectedDecorations([]);
    setResult(null);
  };

  // const resetSelections = () => {
  //   setSelectedDessertTypes([]);
  //   setSelectedFlavors([]);
  //   setSelectedTextures([]);
  //   setSelectedTemperatures([]);
  //   setSelectedDecorations([]);
  //   setImageUrl("");
  //   setImageFileDataUrl("");
  //   setStep(0);
  // };

  const saveIdea = () => {
    if (!result) return;

    const alreadySaved = savedIdeas.some((idea) => idea.id === result.id);
    if (!alreadySaved) return;
    setSavedIdeas((prevIdeas) => [result, ...prevIdeas]);
  };

  const createResult = () => {
    const newIdea: DessertIdea = {
      id: crypto.randomUUID(),
      dessertTypes: selectedDessertTypes,
      flavors: selectedFlavors,
      shapes: selectedShapes,
      textures: selectedTextures,
      temperatures: selectedTemperatures,
      decorations: selectedDecorations,
      favorite: false,
      createdAt: new Date().toISOString(),
    };
    setResult(newIdea);
    setStep(LAST_OPTION_STEP + 1);
    // setSavedIdeas((prev) => [newIdea, ...prev]);
    // resetSelections();
  };

  const handleDeleteIdea = (id: string) => {
    setSavedIdeas((prev) => prev.filter((idea) => idea.id !== id));
  };

  // Update

  const toggleFavorite = (id: string) => {
    setSavedIdeas(
      savedIdeas.map((idea) =>
        idea.id === id ? { ...idea, favorite: !idea.favorite } : idea,
      ),
    );
  };

  const formatItems = (items: string[]) => {
    return items.length > 0 ? items.join(", ") : "not specified";
  };

  const createAiPrompt = () => {
    return `Create a professional plated dessert concept image.

    DessertType: ${formatItems(selectedDessertTypes)}
    Flavor composition: ${formatItems(selectedFlavors)}
    Shapes: ${formatItems(selectedShapes)}
    Texture: ${formatItems(selectedTextures)}
    Temperature style: ${formatItems(selectedTemperatures)}
    Decoration and finishing: ${formatItems(selectedDecorations)}

    Style: modern fine dining dessert, elegant plating, luxury restaurant presentation, clean composition, realistic food photography, soft natural lighting, shallow depth of field, high-end pastry, white or neutral ceramic plate, minimal background.

    Do not include text, labels, hands, people, logos, or packaging.`;
  };

  return (
    <main className={styles.page}>
      <section className={styles.builder}>
        <div className={styles.header}>
          <p className={styles.label}>Dessert Idea Builder</p>
          <h1 className={styles.title}>デザートアイデア作成</h1>
          <p className={styles.description}>
            種類・味・食感・温度感・飾りを自由に組み合わせてデザート案を作成します。
          </p>
        </div>

        {!isResultStep && (
          <p className={styles.stepText}>
            Step {step + 1} / {LAST_OPTION_STEP}
          </p>
        )}

        {!isResultStep && step === 0 && (
          <DessertTypeStep
            selectedValues={selectedDessertTypes}
            onToggle={(value) =>
              toggleOption(value, selectedDessertTypes, setSelectedDessertTypes)
            }
          />
        )}

        {!isResultStep && step === 1 && (
          <FlavorStep
            selectedValues={selectedFlavors}
            onToggle={(value) =>
              toggleOption(value, selectedFlavors, setSelectedFlavors)
            }
          />
        )}

        {!isResultStep && step === 2 && (
          <ShapeStep
            selectedValues={selectedShapes}
            onToggle={(value) =>
              toggleOption(value, selectedShapes, setSelectedShapes)
            }
          />
        )}

        {!isResultStep && step === 3 && (
          <TextureStep
            selectedValues={selectedTextures}
            onToggle={(value) =>
              toggleOption(value, selectedTextures, setSelectedTextures)
            }
          />
        )}

        {!isResultStep && step === 4 && (
          <TemperatureStep
            selectedValues={selectedTemperatures}
            onToggle={(value) =>
              toggleOption(value, selectedTemperatures, setSelectedTemperatures)
            }
          />
        )}

        {!isResultStep && step === 5 && (
          <DecorationStep
            selectedValues={selectedDecorations}
            onToggle={(value) => {
              toggleOption(value, selectedDecorations, setSelectedDecorations);
            }}
          />
        )}

        {!isResultStep ? (
          <div className={styles.actions}>
            <button
              type="button"
              onClick={goBack}
              disabled={step === 0}
              className={styles.secondaryButton}
            >
              戻る
            </button>

            <button
              type="button"
              onClick={goNext}
              className={styles.primaryButton}
            >
              次へ / スキップ
            </button>
          </div>
        ) : (
          result && (
            <div>
              <ResultCard idea={result} onSave={saveIdea} />

              <AIPromptPanel prompt={aiPrompt} />

              <ImageUploadPanel />

              <button
                type="button"
                className={styles.secondlyButton}
                onClick={resetBuilder}
              >
                最初から作り直す
              </button>
            </div>
            //   <ResultCard
            //     dessertTypes={selectedDessertTypes}
            //     flavors={selectedFlavors}
            //     shapes={selectedShapes}
            //     textures={selectedTextures}
            //     temperatures={selectedTemperatures}
            //     decorations={selectedDecorations}
            //     aiPrompt={createAiPrompt()}
            //     imageUrl={imageUrl}
            //     imageFileDataUrl={imageFileDataUrl}
            //     onChangeImageUrl={setImageUrl}
            //     onChangeImageFileDataUrl={setImageFileDataUrl}
            //     onBack={goBack}
            //     onReset={resetSelections}
            //     onSave={handleSaveIdea}
            //   />
          )
        )}

        <SavedIdeaList
          ideas={savedIdeas}
          onDelete={handleDeleteIdea}
          onToggleFavorite={toggleFavorite}
        />
      </section>
    </main>
  );
}
