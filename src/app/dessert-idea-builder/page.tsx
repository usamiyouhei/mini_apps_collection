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
import BuilderView from "@/components/dessert-builder/views/BuilderView";

const STORAGE_KEY = "dessert-ideas";
const LAST_STEP_INDEX = 5;

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

  // const isResultStep = step >= LAST_OPTION_STEP;

  const aiPrompt = result ? createDessertPrompt(result) : "";

  //画面を開いた瞬間に、localStorage に保存されているデザート案を読み込んで、savedIdeas の初期値にする処理
  const [savedIdeas, setSavedIdeas] = useState<DessertIdea[]>([]);
  // const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;
    try {
      const parsedIdeas = JSON.parse(saved) as DessertIdea[];

      const normalisedIdeas = parsedIdeas.map((idea) => ({
        ...idea,
        shapes: idea.shapes ?? [],
        favorite: idea.favorite ?? false,
        aiPrompt: idea.aiPrompt ?? "",
        imageFileDataUrl: idea.imageFileDataUrl ?? "",
      }));
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSavedIdeas(normalisedIdeas);
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const handleSaveIdea = () => {
    if (!result) return;

    const ideaToSave: DessertIdea = {
      ...result,
      aiPrompt,
      imageUrl: "",
      imageFileDataUrl: "",
    };
    const alreadySaved = savedIdeas.some((idea) => idea.id === result.id);
    if (alreadySaved) return;

    const nextIdeas = [ideaToSave, ...savedIdeas];

    setSavedIdeas(nextIdeas);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextIdeas));
  };

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
    if (step < LAST_STEP_INDEX) setStep((prev) => prev + 1);
    return;
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
    setSelectedTemperatures([]);
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

  // const saveIdea = () => {
  //   if (!result) return;

  //   const alreadySaved = savedIdeas.some((idea) => idea.id === result.id);
  //   if (!alreadySaved) return;
  //   setSavedIdeas((prevIdeas) => [result, ...prevIdeas]);
  // };

  // const createResult = () => {
  //   const newIdea: DessertIdea = {
  //     id: crypto.randomUUID(),
  //     dessertTypes: selectedDessertTypes,
  //     flavors: selectedFlavors,
  //     shapes: selectedShapes,
  //     textures: selectedTextures,
  //     temperatures: selectedTemperatures,
  //     decorations: selectedDecorations,
  //     favorite: false,
  //     createdAt: new Date().toISOString(),
  //   };
  //   setResult(newIdea);
  //   setStep(LAST_OPTION_STEP + 1);
  //   // setSavedIdeas((prev) => [newIdea, ...prev]);
  //   // resetSelections();
  // };

  const handleDeleteIdea = (id: string) => {
    const nextIdeas = savedIdeas.filter((idea) => idea.id !== id);

    setSavedIdeas(nextIdeas);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextIdeas));
  };

  // Update

  const toggleFavorite = (id: string) => {
    const nextIdeas = savedIdeas.map((idea) =>
      idea.id === id ? { ...idea, favorite: !idea.favorite } : idea,
    );
    setSavedIdeas(nextIdeas);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextIdeas));
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

        {!result && (
          <BuilderView
            step={step}
            lastStep={LAST_STEP_INDEX}
            selectedDessertTypes={selectedDessertTypes}
            selectedFlavors={selectedFlavors}
            selectedShapes={selectedShapes}
            selectedTextures={selectedTextures}
            selectedTemperatures={selectedTemperatures}
            selectedDecorations={selectedDecorations}
            onToggleDessertType={(value) =>
              toggleOption(value, selectedDessertTypes, setSelectedDessertTypes)
            }
            onToggleFlavor={(value) =>
              toggleOption(value, selectedFlavors, setSelectedFlavors)
            }
            onToggleShape={(value) =>
              toggleOption(value, selectedShapes, setSelectedShapes)
            }
            onToggleTexture={(value) =>
              toggleOption(value, selectedTextures, setSelectedTextures)
            }
            onToggleTemperature={(value) =>
              toggleOption(value, selectedTemperatures, setSelectedTemperatures)
            }
            onToggleDecoration={(value) =>
              toggleOption(value, selectedDecorations, setSelectedDecorations)
            }
            onBack={goBack}
            onNext={goNext}
          />
        )}

        {result && (
          <div>
            <ResultCard idea={result} onSave={handleSaveIdea} />

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
