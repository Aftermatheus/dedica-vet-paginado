import { ClinicalSigns } from "src/types/ClinicalSigns";

type DiseasesType = Readonly<
  Array<{
    name: string;
    clinical_signs: Partial<Record<ClinicalSigns, number>>;
    extra_signals_effect: number;
  }>
>;

export const Diseases: DiseasesType = [
  {
    name: "Doença A",
    extra_signals_effect: -0.33,
    clinical_signs: {
      [ClinicalSigns.VOMIT]: 1,
      [ClinicalSigns.DIARRHEA]: 1,
      [ClinicalSigns.FEVER]: 1,
      [ClinicalSigns.ATAXY]: 1,
      [ClinicalSigns.MYOCLONUS]: 1,
      [ClinicalSigns.CONJUNCTIVITIS]: 1,
      [ClinicalSigns.NASAL_DISCHARGE]: 1,
      [ClinicalSigns.EYE_DISCHARGE]: 1,
      [ClinicalSigns.DRY_COUGH]: 1,
      [ClinicalSigns.DYSPNEA]: 1,
      [ClinicalSigns.ANOREXIA]: 1,
    },
  },
  {
    name: "Doença B",
    extra_signals_effect: -0.33,
    clinical_signs: {
      [ClinicalSigns.VOMIT]: 1,
      [ClinicalSigns.DIARRHEA]: 1,
      [ClinicalSigns.FEVER]: 1,
      [ClinicalSigns.ATAXY]: 1,
      [ClinicalSigns.MYOCLONUS]: 1,
      [ClinicalSigns.CONJUNCTIVITIS]: 1,
      [ClinicalSigns.NASAL_DISCHARGE]: 1,
      [ClinicalSigns.EYE_DISCHARGE]: 1,
      [ClinicalSigns.DRY_COUGH]: 1,
      [ClinicalSigns.DYSPNEA]: 1,
      [ClinicalSigns.ANOREXIA]: 1,
    },
  },
  {
    name: "Doença C",
    extra_signals_effect: -0.33,
    clinical_signs: {
      [ClinicalSigns.DIARRHEA]: 1,
      [ClinicalSigns.FEVER]: 1,
      [ClinicalSigns.ATAXY]: 1,
      [ClinicalSigns.MYOCLONUS]: 1,
      [ClinicalSigns.CONJUNCTIVITIS]: 1,
      [ClinicalSigns.NASAL_DISCHARGE]: 1,
      [ClinicalSigns.EYE_DISCHARGE]: 1,
      [ClinicalSigns.DRY_COUGH]: 1,
      [ClinicalSigns.DYSPNEA]: 1,
      [ClinicalSigns.ANOREXIA]: 1,
    },
  },
  {
    name: "Doença D",
    extra_signals_effect: -0.33,
    clinical_signs: {
      [ClinicalSigns.DIARRHEA]: 1,
      [ClinicalSigns.FEVER]: 1,
      [ClinicalSigns.ATAXY]: 1,
      [ClinicalSigns.MYOCLONUS]: 1,
      [ClinicalSigns.CONJUNCTIVITIS]: 1,
      [ClinicalSigns.NASAL_DISCHARGE]: 1,
      [ClinicalSigns.EYE_DISCHARGE]: 1,
      [ClinicalSigns.DRY_COUGH]: 1,
      [ClinicalSigns.DYSPNEA]: 1,
      [ClinicalSigns.ANOREXIA]: 1,
    },
  },
  {
    name: "Doença E",
    extra_signals_effect: -0.33,
    clinical_signs: {
      [ClinicalSigns.FEVER]: 1,
      [ClinicalSigns.ATAXY]: 1,
      [ClinicalSigns.MYOCLONUS]: 1,
      [ClinicalSigns.CONJUNCTIVITIS]: 1,
      [ClinicalSigns.NASAL_DISCHARGE]: 1,
      [ClinicalSigns.EYE_DISCHARGE]: 1,
      [ClinicalSigns.DRY_COUGH]: 1,
      [ClinicalSigns.DYSPNEA]: 1,
      [ClinicalSigns.ANOREXIA]: 1,
    },
  },
  {
    name: "Doença F",
    extra_signals_effect: -0.33,
    clinical_signs: {
      [ClinicalSigns.MYOCLONUS]: 1,
      [ClinicalSigns.CONJUNCTIVITIS]: 1,
      [ClinicalSigns.NASAL_DISCHARGE]: 1,
      [ClinicalSigns.EYE_DISCHARGE]: 1,
      [ClinicalSigns.DRY_COUGH]: 1,
      [ClinicalSigns.DYSPNEA]: 1,
      [ClinicalSigns.ANOREXIA]: 1,
    },
  },
  {
    name: "Doença G",
    extra_signals_effect: -0.33,
    clinical_signs: {
      [ClinicalSigns.VOMIT]: 1,
      [ClinicalSigns.DIARRHEA]: 1,
      [ClinicalSigns.FEVER]: 1,
      [ClinicalSigns.ATAXY]: 1,
      [ClinicalSigns.MYOCLONUS]: 1,
      [ClinicalSigns.CONJUNCTIVITIS]: 1,
      [ClinicalSigns.NASAL_DISCHARGE]: 1,
      [ClinicalSigns.EYE_DISCHARGE]: 1,
    },
  },
  {
    name: "Doença H",
    extra_signals_effect: -0.33,
    clinical_signs: {
      [ClinicalSigns.VOMIT]: 1,
      [ClinicalSigns.DIARRHEA]: 1,
      [ClinicalSigns.FEVER]: 1,
      [ClinicalSigns.DRY_COUGH]: 1,
      [ClinicalSigns.DYSPNEA]: 1,
      [ClinicalSigns.ANOREXIA]: 1,
    },
  },
  {
    name: "Doença I",
    extra_signals_effect: -0.33,
    clinical_signs: {
      [ClinicalSigns.VOMIT]: 1,
      [ClinicalSigns.DIARRHEA]: 1,
      [ClinicalSigns.FEVER]: 1,
      [ClinicalSigns.ATAXY]: 1,
      [ClinicalSigns.MYOCLONUS]: 1,
      [ClinicalSigns.CONJUNCTIVITIS]: 1,
      [ClinicalSigns.NASAL_DISCHARGE]: 1,
      [ClinicalSigns.EYE_DISCHARGE]: 1,
      [ClinicalSigns.DRY_COUGH]: 1,
      [ClinicalSigns.DYSPNEA]: 1,
      [ClinicalSigns.ANOREXIA]: 1,
      [ClinicalSigns.NASAL_HYPERKERATOSIS]: 1,
      [ClinicalSigns.ABDOMINAL_PUSTULES]: 1,
    },
  },
  {
    name: "Doença J",
    extra_signals_effect: -0.33,
    clinical_signs: {
      [ClinicalSigns.VOMIT]: 1,
      [ClinicalSigns.DIARRHEA]: 1,
      [ClinicalSigns.FEVER]: 1,
      [ClinicalSigns.ATAXY]: 1,
      [ClinicalSigns.MYOCLONUS]: 1,
      [ClinicalSigns.CONJUNCTIVITIS]: 1,
      [ClinicalSigns.NASAL_DISCHARGE]: 1,
      [ClinicalSigns.EYE_DISCHARGE]: 1,
      [ClinicalSigns.DRY_COUGH]: 1,
      [ClinicalSigns.DYSPNEA]: 1,
      [ClinicalSigns.ANOREXIA]: 1,
      [ClinicalSigns.NASAL_HYPERKERATOSIS]: 1,
      [ClinicalSigns.ABDOMINAL_PUSTULES]: 1,
      [ClinicalSigns.SIALORRHEA]: 1,
    },
  },
];
