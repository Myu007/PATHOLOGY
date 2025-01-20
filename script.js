const questions = [
  {
    question: 'The term cellular pathology was coined by ',
    answers: [
      {text: 'Rudolf Virchow', correct: true},
      {text: 'nan', correct: false},
      {text: 'Antoine van Leeuwenhoek', correct: false},
      {text: 'Louis Pasteur', correct: false},
      {text: 'Edward Jenner', correct: false},
    ],
  },
  {
    question: 'What is the term used for the mechanism of death?',
    answers: [
      {text: 'Etiology ', correct: false},
      {text: 'Thanatogenesis', correct: true},
      {text: 'Pathogenesis', correct: false},
      {text: 'Pathomorphism ', correct: false},
      {text: 'Morphogenesis ', correct: false},
    ],
  },
  {
    question: 'What does health criteria include?',
    answers: [
      {text: 'State of optimal well-being, absence of health complaints.', correct: true},
      {text: 'abnormal diagnostic test', correct: false},
      {text: 'abnormal laboratory test', correct: false},
      {text: 'presence of the main signs and symptoms of the disease.', correct: false},
      {text: 'State of optimal health, presence of health complaints.', correct: false},
    ],
  },
  {
    question: 'What do experimental modeling methods in pathophysiology include?',
    answers: [
      {text: 'method of descriptive pathology ', correct: false},
      {text: 'method of isolated organs ', correct: true},
      {text: 'method of compatible organs', correct: false},
      {text: 'selection method', correct: false},
      {text: 'shutdown method ', correct: false},
    ],
  },
  {
    question: 'Which sigh of death characterized by emptiness of arteries and overflowing veins with blood?',
    answers: [
      {text: 'Cadaveric spots  ', correct: true},
      {text: 'Rigor mortis', correct: false},
      {text: 'Cadaveric drying', correct: false},
      {text: 'Cadaveric cooling', correct: false},
      {text: 'Stop of breath', correct: false},
    ],
  },
  {
    question: 'Which sign of biologic death which associated with hardning of muscles?',
    answers: [
      {text: 'Cadaveric cooling ', correct: false},
      {text: 'Rigor mortis', correct: true},
      {text: 'Cadaveric decomposition', correct: false},
      {text: 'Cadaveric spots ', correct: false},
      {text: 'Cadaveric drying', correct: false},
    ],
  },
  {
    question: 'Which statement is not true regarding cell damage caused by hypoxia?',
    answers: [
      {text: 'Sudden and severe hypoxia causes atrophy', correct: true},
      {text: 'nan', correct: false},
      {text: 'Hypoxia is a common cause of cell injury and cell death ', correct: false},
      {text: 'Maybe caused by ischemia, cardiorespiratory failure, carbon monoxide poisoning and severe blood loss ', correct: false},
      {text: 'Reduced aerobic respiration ', correct: false},
    ],
  },
  {
    question: 'What human body organ or system damage can cause general oxygen deficiency –hypoxia, according to disorder of oxygen delivery to tissues?',
    answers: [
      {text: 'respiratory system', correct: false},
      {text: 'tissue itself', correct: false},
      {text: 'GIT system', correct: false},
      {text: 'circulatory system', correct: false},
      {text: 'blood system', correct: true},
    ],
  },
  {
    question: 'Which of the following is involved in recognition and clearance of necrotic cells? ',
    answers: [
      {text: 'inflammasome', correct: true},
      {text: 'nan', correct: false},
      {text: 'p selectin', correct: false},
      {text: 'Toll-like receptors (TLRs)', correct: false},
      {text: 'Manoreceptor', correct: false},
    ],
  },
  {
    question: 'In cell injury, increased eosinophilia is due to?',
    answers: [
      {text: 'None of the above', correct: false},
      {text: 'Denatured protein', correct: false},
      {text: 'nan', correct: false},
      {text: 'Loss of cytoplasmic RNA', correct: false},
      {text: 'Both', correct: true},
    ],
  },
  {
    question: 'Which of the following best describes the consequence of reversible cell injury?',
    answers: [
      {text: 'Activation of inflammatory response', correct: false},
      {text: 'Formation of apoptotic bodies', correct: false},
      {text: 'Impaired cell function with potential for recovery', correct: true},
      {text: 'Disruption of cellular membrane integrity', correct: false},
      {text: 'Complete loss of cellular structure', correct: false},
    ],
  },
  {
    question: '23-year-old male athlete who is practicing for his upcoming marathon felt chest discomfort during his practice which was relieved after few minutes of rest. Which is the following is false regarding the cell injury in this scenario? ',
    answers: [
      {text: 'nan', correct: false},
      {text: 'Accumulation of myelin figures in the cytoplasm', correct: false},
      {text: 'Detachment of ribosomes from the endoplasmic reticulum (ER) ', correct: false},
      {text: 'Breakdown of plasma membrane ', correct: true},
      {text: 'Hydropic change', correct: false},
    ],
  },
  {
    question: 'Causes of the coagulative necrosis are?',
    answers: [
      {text: 'Infection', correct: false},
      {text: 'nan', correct: false},
      {text: 'nan', correct: false},
      {text: 'Denaturation of protein', correct: true},
      {text: 'Enzymatic digestion', correct: false},
    ],
  },
  {
    question: 'Which among the following is responsible for necrosis?',
    answers: [
      {text: 'Denaturation of protein', correct: false},
      {text: 'nan', correct: false},
      {text: 'Enzymatic digestion', correct: false},
      {text: 'Both stated in options', correct: true},
      {text: 'None of the above', correct: false},
    ],
  },
  {
    question: 'A chest X-ray reveals findings consistent with a Ghon complex. Sputum cultures grow acid-fast bacilli. Examination of hilar lymph nodes in this patient would most likely demonstrate which of the following pathologic changes?',
    answers: [
      {text: 'Caseous necrosis ', correct: true},
      {text: 'Fat necrosis', correct: false},
      {text: 'Coagulative necrosis', correct: false},
      {text: 'nan', correct: false},
      {text: 'Fibrinoid necrosis', correct: false},
    ],
  },
  {
    question: 'During Cell injury, FAS Ligand and TNF ex combine/attaches with FAS & TNF Receptors respectively leading to TRIMERIZATION & Activation of FADD which activates Caspase 8 ultimately leading to activation of Proteases and Endonucleases causing Cell Death & CD 95 is an important marker of the whole. Which process described here?',
    answers: [
      {text: 'nan', correct: false},
      {text: 'Cellular adaption', correct: false},
      {text: 'Extrinsic pathway of apoptosis', correct: true},
      {text: 'Necrosis of cell', correct: false},
      {text: 'Intrinsic pathway of apoptosis. ', correct: false},
    ],
  },
  {
    question: 'Which of the following is a true statement about apoptosis?',
    answers: [
      {text: 'Plasma membrane is intact.', correct: true},
      {text: 'Karyolysis is present', correct: false},
      {text: 'There is enzymatic digestion of cellular contents', correct: false},
      {text: 'nan', correct: false},
      {text: 'It is associated with adjacent inflammation', correct: false},
    ],
  },
  {
    question: 'What histologically signs of fatty changes are seen by light microscopy',
    answers: [
      {text: 'Eosinophilic granules', correct: false},
      {text: 'Intracellular granules', correct: false},
      {text: 'Basophilic granules', correct: false},
      {text: 'Vacuoles in the cytoplasm around the nucleus', correct: true},
      {text: 'Extracellular granules', correct: false},
    ],
  },
  {
    question: 'What the name of the cells accumulating fat within the intimal layer of aorta and large arteries in atherosclerotic plaques?',
    answers: [
      {text: 'Leukocytes', correct: false},
      {text: 'Foam cells', correct: true},
      {text: 'Epithelial cells', correct: false},
      {text: 'Lymphocytes', correct: false},
      {text: 'Fibroblasts', correct: false},
    ],
  },
  {
    question: 'A 48-year-old patient with glomerulonephritis has renal changes. Microscopically: pink formations in the form of drops in the epithelium of the kidney tubules. What pathological process developed in this case?',
    answers: [
      {text: 'Accumulation of cholesterol', correct: false},
      {text: 'Accumulation of lipids', correct: false},
      {text: 'Accumulation of amyloid', correct: false},
      {text: 'Accumulation of proteins', correct: true},
      {text: 'Accumulation of carbohydrates', correct: false},
    ],
  },
  {
    question: 'What pathological process is characterized by derangements of glycogen metabolism?',
    answers: [
      {text: 'Diabetes Mellitus', correct: true},
      {text: 'Viral hepatitis', correct: false},
      {text: 'Atherosclerosis', correct: false},
      {text: 'Arterial hypertension', correct: false},
      {text: 'Goiter', correct: false},
    ],
  },
  {
    question: 'A 50-year-old patient suffering from hypertension died of cerebral hemorrhage. Microscopically revealed: the walls of the arterioles are thickened, represent a homogeneous mass of pink when stained with hematoxylin and eosin, the lumen of the vessels is narrowed. What type of dystrophy in this case?',
    answers: [
      {text: 'Amyloidosis', correct: false},
      {text: 'Hemochromatosis', correct: false},
      {text: 'Hemosiderosis', correct: false},
      {text: 'Fatty change', correct: false},
      {text: 'Hyalinosis', correct: true},
    ],
  },
  {
    question: 'Which of the following staining methods is not used for amyloidosis?',
    answers: [
      {text: 'nan', correct: false},
      {text: 'Congo-Red', correct: false},
      {text: 'Crystal Violet', correct: false},
      {text: 'Thioflavin T', correct: false},
      {text: 'Methenamine Silver', correct: true},
    ],
  },
  {
    question: 'What are the main types of amyloidosis, and which genes or proteins are associated with their development?',
    answers: [
      {text: 'Amyloidosis AL, caused by aggregation of the acute phase reagent, serum amyloid A', correct: false},
      {text: 'Amyloidosis A1, caused by genetic mutation', correct: false},
      {text: 'Amyloidosis type X, caused by mutation of an unknown gene', correct: false},
      {text: ' Type I amyloidosis associated with age', correct: false},
      {text: ' AL amyloidosis, caused by overexpression of immunoglobulin light chains', correct: true},
    ],
  },
  {
    question: 'Accumulation of which pigment may leads to decrease of blood pressure?',
    answers: [
      {text: 'Hemosiderin', correct: false},
      {text: 'Porphyrin', correct: false},
      {text: 'Bilirubin', correct: false},
      {text: 'Hemomelanin', correct: false},
      {text: 'Ferritin', correct: true},
    ],
  },
  {
    question: 'A 83 year old thin built male was brought Unconscious. Upon examination Pulse was feeble, BP unrecordable, GCS 3/15. ECG shown Flat line in all leads. Autopsy was done. HPE of cardiac tissue revealed peri nuclear brown pigment . This HPE finding occurs due to: ',
    answers: [
      {text: 'Bilirubin', correct: false},
      {text: 'Hemosiderin', correct: false},
      {text: 'nan', correct: false},
      {text: 'Lipofuscin', correct: true},
      {text: 'Melanin', correct: false},
    ],
  },
  {
    question: 'Which pigment derived from hemoglobin found in normal conditions?',
    answers: [
      {text: 'Hemin ', correct: false},
      {text: 'Hematoidin', correct: false},
      {text: 'Porphyrin', correct: false},
      {text: 'Hemosiderin', correct: true},
      {text: ' Hemomelanin', correct: false},
    ],
  },
  {
    question: 'At 22-year-old patient has photosensitivity of skin, massive enlargement of liver with severe abdominal pain, red color of urine. What pigment exchange disorder is there in this case?',
    answers: [
      {text: 'Bilirubin', correct: false},
      {text: 'Hemosiderin', correct: false},
      {text: 'Porphyrins', correct: true},
      {text: 'Lipofuscin', correct: false},
      {text: 'Hematoidin', correct: false},
    ],
  },
  {
    question: 'What is dystrophic calcification',
    answers: [
      {text: 'Increased bone catabolism', correct: false},
      {text: 'deposition of calcium salts in normal tissues', correct: false},
      {text: 'Hypervitaminosis D', correct: false},
      {text: 'derangement in calcium and phosphate metabolism', correct: false},
      {text: 'deposition of calcium salts in dead tissues', correct: true},
    ],
  },
  {
    question: 'In Metastatic calcification, Serum Calcium levels are elevated and gets deposited in living tissues. An internal alkaline compo111ent is needed in the tissue for which the Metastatic calcification to happen.Which organ will not have metastatic calcification?',
    answers: [
      {text: 'Gastric mucosa ', correct: false},
      {text: 'Cardiac valves', correct: true},
      {text: 'Lungs ', correct: false},
      {text: 'Kidneys', correct: false},
      {text: 'nan', correct: false},
    ],
  },
  {
    question: 'ABG analysis of a patient reveals the following values: pC02 · 16 mm Hg; HC03 · 6 I mEq/L; and pH - 7 .1. What is the probable underlying acid-base disorder in this patient?',
    answers: [
      {text: 'nan', correct: false},
      {text: 'Respiratory acidosis with compensatory metabolic alkalosis', correct: false},
      {text: 'Metabolic acidosis with compensatory respiratory alkalosis', correct: true},
      {text: 'Mixed acid- based sorder', correct: false},
      {text: 'Metabolic alkalosis with compensatory respiratory acidosis', correct: false},
    ],
  },
  {
    question: 'A diabetic normotensive patient of Enterococcus faecalis sepsis, on intravenous Linezolid developed high anion gap metabolic acidosis with increased serum lactate and negative ketone. The acid base abnormality is most probably? ',
    answers: [
      {text: 'Type B lactic acidosis due to linezolid', correct: true},
      {text: 'Metabolic acidosis of uncertain etiology ', correct: false},
      {text: 'Type A lactic acidosis due to septic shock ', correct: false},
      {text: 'nan', correct: false},
      {text: 'Diabetic ketoacidosis', correct: false},
    ],
  },
  {
    question: 'Which of the following electrolytes is primarily regulated by aldosterone?',
    answers: [
      {text: 'Chloride', correct: false},
      {text: 'Sodium', correct: true},
      {text: 'Potassium', correct: false},
      {text: 'Calcium', correct: false},
      {text: 'Magnesium', correct: false},
    ],
  },
  {
    question: 'In which of the following conditions is decreased colloidal osmotic pressure the main cause of edema?',
    answers: [
      {text: 'Congestive heart failure', correct: false},
      {text: 'Constrictive pericarditis', correct: false},
      {text: 'Nephrotic syndrome', correct: true},
      {text: 'nan', correct: false},
      {text: 'Deep venous thrombosis', correct: false},
    ],
  },
  {
    question: 'Cyanotic induration of kidney is characterized by:',
    answers: [
      {text: 'Enlarged, hard, brown', correct: false},
      {text: 'Enlarged, soft, brown', correct: false},
      {text: 'Small, hard, red-brown', correct: false},
      {text: 'Enlarged, hard, blue-red', correct: true},
      {text: 'Small. soft, red', correct: false},
    ],
  },
  {
    question: 'Patient 52 years old suffered of cardiomyopathy was died of cardiopulmonary insufficiency. An autopsy revealed changes in the liver. Grossly: liver enlarged in size and weight, hard, with on cut surface – nutmeg appearance. Which type of hemodynamic disorders occurs in this case?',
    answers: [
      {text: 'Local arterial hyperemia', correct: false},
      {text: 'Collateral hyperemia', correct: false},
      {text: 'Acute venous hyperemia', correct: false},
      {text: 'Chronic venous hyperemia', correct: true},
      {text: 'General arterial hyperemia', correct: false},
    ],
  },
  {
    question: 'Virchow’s triad is etiology of one of local circulation disorders which includes what one of following signs?',
    answers: [
      {text: 'low oxyhemoglobin', correct: false},
      {text: 'hypocoagubility', correct: false},
      {text: 'smoot vessel wall', correct: false},
      {text: 'fast blood flow', correct: false},
      {text: 'hypercoagubility', correct: true},
    ],
  },
  {
    question: 'A 71-year-old patient suffered from ischemic heart disease and was died from chronic heart failure. Microscopic examination of the heart revealed: in the branch of the left coronary artery thrombotic masses with proliferation of connective tissue in which channels covered with endothelial cells. Which outcome of thrombus occurs in this case?',
    answers: [
      {text: 'Organization', correct: false},
      {text: 'Calcification ', correct: false},
      {text: 'Suppuration', correct: true},
      {text: 'Dissolution', correct: false},
      {text: 'Recanalization', correct: false},
    ],
  },
  {
    question: 'Which embolism may be the cause of a rare syndrome due to the entry of infected material into the systemic venous bloodstream and pulmonary arterial system?',
    answers: [
      {text: 'Foreign body embolism', correct: true},
      {text: 'Septic embolism',
        correct: false},
      {text: 'Air embolism',
        correct: false},
      {text: 'Amniotic fluid embolism',
        correct: false},
      {text: 'Fat embolism', correct: false},
    ],
  },
  {
    question: 'Which of the following is the most common cause of pulmonary embolism?',
    answers: [
      {text: ' Foreign body embolism.', correct: false},
      {text: 'Septic embolism', correct: false},
      {text: 'Amniotic fluid embolism', correct: false},
      {text: 'Air embolism', correct: false},
      {text: ' Fat embolism', correct: true},
    ],
  },
  {
    question: 'Characteristic of the infarction?',
    answers: [
      {text: 'direct necrosis', correct: false},
      {text: 'vascular necrosis', correct: true},
      {text: 'caseous necrosis', correct: false},
      {text: 'traumatic necrosis', correct: false},
      {text: 'trophoneurotic necrosis', correct: false},
    ],
  },
  {
    question: 'What type of embolism may lead to generalization of the infection?',
    answers: [
      {text: 'Thromboembolism', correct: false},
      {text: 'Foreign body embolism', correct: false},
      {text: 'Gas embolism', correct: false},
      {text: 'Microbial embolism', correct: true},
      {text: 'Amniotic fluid embolism', correct: false},
    ],
  },
  {
    question: 'Which term used for hemorrhage from respiratory system?',
    answers: [
      {text: 'Metrorrhagia', correct: false},
      {text: 'Maelena', correct: false},
      {text: 'Haematemesis ', correct: false},
      {text: 'Haemoptoe', correct: true},
      {text: 'Epistaxis', correct: false},
    ],
  },
  {
    question: 'A patient suffered of arterial hyprtension was suddenly died. An autopsy showed massive intracerebral hemorrhage in the right hemosphere of the brain What is the cause of the hemorrhage?',
    answers: [
      {text: 'Rupture of the vessel wall', correct: true},
      {text: 'Vascular atherosclerosis', correct: false},
      {text: 'Increased permeability of the vessel wall', correct: false},
      {text: 'Inflammation of vessel wall', correct: false},
      {text: 'Corrosion of the vessel wall', correct: false},
    ],
  },
  {
    question: 'Which of the following is the most common type of shock: ',
    answers: [
      {text: 'Hypovolemic', correct: true},
      {text: 'Obstructive', correct: false},
      {text: 'nan', correct: false},
      {text: 'Distributive', correct: false},
      {text: 'Cardiogenic', correct: false},
    ],
  },
  {
    question: 'A 20-year-old patient has profuse hemorrhage (2 L) as a result of trauma of the femoral artery. On admission to the hospital, revealed pale of the skin, a severe decrease of blood pressure (60/30 mm Hg). Which type of shock occurs in this case? ',
    answers: [
      {text: 'Neurogenic', correct: false},
      {text: 'Anaphylactic', correct: false},
      {text: 'Cardiogenic', correct: false},
      {text: 'Toxic', correct: false},
      {text: 'Hypovolemic', correct: true},
    ],
  },
  {
    question: 'Most common feature of polytrauma in pediatric age group:',
    answers: [
      {text: 'Hypoxemia', correct: false},
      {text: 'Hypovolemic shock ', correct: true},
      {text: 'nan', correct: false},
      {text: 'Hypothermia', correct: false},
      {text: 'Hypotension ', correct: false},
    ],
  },
  {
    question: 'In hypovolemic shock which organ should be assessed for determining under-perfusion?',
    answers: [
      {text: 'nan', correct: false},
      {text: 'Kidney', correct: true},
      {text: 'Heart', correct: false},
      {text: 'Lung', correct: false},
      {text: 'Liver', correct: false},
    ],
  },
  {
    question: 'Which of the following does not apply to DIC syndrome?',
    answers: [
      {text: 'Release of tissue factor', correct: false},
      {text: 'Platelet aggregation ', correct: false},
      {text: 'Decreased fibrin degradation products ', correct: true},
      {text: 'nan', correct: false},
      {text: 'Fibrin deposition in microcirculation ', correct: false},
    ],
  },
  {
    question: 'A 45-year-old male with severe sepsis secondary to pneumonia presents to the intensive care unit. Despite aggressive fluid resuscitation and broad-spectrum antibiotics, he develops ecchymoses, petechiae, and mucosal bleeding. Laboratory tests show prolonged activated partial thromboplastin time (aPTT), decreased fibrinogen levels, and schistocytes on peripheral blood smear. What is the most likely diagnosis?',
    answers: [
      {text: 'Idiopathic thrombocytopenic purpura', correct: false},
      {text: 'Disseminated intravascular coagulation (DIC)', correct: true},
      {text: 'Hemolytic uremic syndrome', correct: false},
      {text: 'Antiphospholipid syndrome', correct: false},
      {text: 'Thrombotic thrombocytopenic purpura', correct: false},
    ],
  },
  {
    question: 'Which of these complement factor is a marker of humoral rejection?',
    answers: [
      {text: 'C3b', correct: false},
      {text: 'C4d', correct: true},
      {text: 'C5a', correct: false},
      {text: 'nan', correct: false},
      {text: 'C3d', correct: false},
    ],
  },
  {
    question: 'A 45-year-old male complains of chronic joint pain, stiffness, and swelling, particularly in his hands and wrists. He reports that the symptoms worsen in the morning and improve with movement throughout the day. What autoimmune disorder is most likely causing his symptoms?',
    answers: [
      {text: 'Type 1 diabetes mellitus', correct: false},
      {text: 'Multiple sclerosis', correct: false},
      {text: 'Rheumatoid arthritis', correct: true},
      {text: 'Systemic lupus erythematosus (SLE)', correct: false},
      {text: 'Hashimoto\'s thyroiditis', correct: false},
    ],
  },
  {
    question: 'Which of the following is secreted by classically activated macrophages (M1 )?',
    answers: [
      {text: 'IL-4', correct: false},
      {text: 'IL-3', correct: false},
      {text: 'IL-2', correct: false},
      {text: 'IL-1 ', correct: true},
      {text: 'nan', correct: false},
    ],
  },
  {
    question: 'Specific form of endocytosis involving the vesicular internalization of solid particles, such as bacteria. It is the process by w hich cells ingesl large objecls, such as cells which have undergone apoplosis, bacleria, or viruses. The function common to neutrophils. monocy;es, macrophages is',
    answers: [
      {text: 'Phagocytosis ', correct: true},
      {text: 'nan', correct: false},
      {text: 'Liberation of histamine ', correct: false},
      {text: 'Destruction of old erythrocytes', correct: false},
      {text: 'Immune response is reduced', correct: false},
    ],
  },
  {
    question: 'Which of the following cells is the main source of antigens for activation of the immune system?',
    answers: [
      {text: 'Erythrocytes', correct: false},
      {text: ' Macrophages', correct: true},
      {text: 'Platelets ', correct: false},
      {text: ' Neurons', correct: false},
      {text: 'Fibroblasts', correct: false},
    ],
  },
  {
    question: 'Local lymph nodules are enlarged near the infected wound. Increased amount of macrophages, lymphocytes, lymphatic follicles in the cortical layer and large amount of plasma cells were revealed on histological examinat ion. What process in the lymphatic nodules represent these histological changes? ',
    answers: [
      {text: 'Tumour transformation ', correct: false},
      {text: 'Antigen stimulation ', correct: true},
      {text: 'Innate insufficiency of the lymphoid tissue', correct: false},
      {text: 'Acquired insufficiency of the lymphoid tissue ', correct: false},
      {text: 'nan', correct: false},
    ],
  },
  {
    question: 'What is the process by which an individual becomes hypersensitive to a particular antigen upon initial exposure?',
    answers: [
      {text: 'Immunization ', correct: false},
      {text: 'Sensitization ', correct: true},
      {text: ' Immunosuppression', correct: false},
      {text: ' Desensitization ', correct: false},
      {text: 'Tolerance ', correct: false},
    ],
  },
  {
    question: 'A 45-year-old man presents with a history of seasonal exacerbations of asthma and allergic rhinitis. He reports worsening symptoms during the pollen season despite adherence to prescribed medications. Skin prick testing confirms sensitization to grass pollen. What lifestyle modification could help reduce his exposure to allergens and improve symptom control?',
    answers: [
      {text: 'Regular exercise regimen', correct: false},
      {text: 'Smoking cessation', correct: false},
      {text: 'Consumption of a balanced diet', correct: false},
      {text: 'Avoidance of outdoor activities during peak pollen times', correct: true},
      {text: 'Use of air purifiers at home', correct: false},
    ],
  },
  {
    question: 'Which of the following is a marker of T lymphocytes?',
    answers: [
      {text: 'CD45', correct: false},
      {text: 'CD20', correct: false},
      {text: 'CD8', correct: true},
      {text: 'CD19', correct: false},
      {text: 'nan', correct: false},
    ],
  },
  {
    question: 'Which of the following is a Type 2 Hypersensitivity reaction? ',
    answers: [
      {text: 'Chronic kidney rejection ', correct: false},
      {text: 'nan', correct: false},
      {text: 'Arthus reaction ', correct: false},
      {text: 'Mantoux test', correct: false},
      {text: 'Mismatched blood transfusion ', correct: true},
    ],
  },
  {
    question: 'A 20-year-old woman with a history of asthma and allergies undergoes skin testing to identify potential allergens in her environment. A positive skin reaction to ragweed in this patient would be mediated by which of the following classes of immunoglobulin? ',
    answers: [
      {text: 'lgG', correct: false},
      {text: 'nan', correct: false},
      {text: 'lgD', correct: false},
      {text: 'IgE', correct: true},
      {text: 'lgA', correct: false},
    ],
  },
  {
    question: 'Which of the following organs is not involved in acute graft versus host disease',
    answers: [
      {text: 'Liver', correct: false},
      {text: 'Skin', correct: false},
      {text: 'Git', correct: false},
      {text: 'nan', correct: false},
      {text: 'Lung', correct: true},
    ],
  },
  {
    question: 'A 52-year-old woman with a history of systemic hypertension and chronic renal failure undergoes kidney transplantation, but the graft fails to produce urine. A renal biopsy is diagnosed as hyperacute transplant rejection. Graft rejection in this patient is caused primarily by which of the following mediators of immunity and inflammation?',
    answers: [
      {text: 'Helper T lymphocytes ', correct: false},
      {text: 'Preformed antibodies', correct: true},
      {text: 'Cyrotoxic T lymphocytes ', correct: false},
      {text: 'nan', correct: false},
      {text: 'Mononuclear phagocytes', correct: false},
    ],
  },
  {
    question: 'Components of innate immunity are',
    answers: [
      {text: 'nan', correct: false},
      {text: 'Complement system factors', correct: false},
      {text: 'NK cells', correct: false},
      {text: 'All of the above', correct: true},
      {text: 'Dendritic cells', correct: false},
    ],
  },
  {
    question: 'A 5-month-old infant presents with recurrent fungal infections, particularly involving the skin, nails, and oral cavity. Laboratory tests show decreased levels of T lymphocytes. What primary immunodeficiency disorder is this patient likely suffering from?',
    answers: [
      {text: 'Hyper-IgM syndrome', correct: false},
      {text: 'DiGeorge syndrome', correct: false},
      {text: 'X-linked agammaglobulinemia', correct: false},
      {text: 'Severe combined immunodeficiency', correct: true},
      {text: 'Chronic granulomatous disease', correct: false},
    ],
  },
  {
    question: 'Most common malignancy in AIDS:',
    answers: [
      {text: 'Leukemia of myeloid origin', correct: false},
      {text: 'B cell lymphoma', correct: false},
      {text: 'Burkitt\'s lymphoma', correct: false},
      {text: 'Kaposi sarcoma ', correct: true},
      {text: 'nan', correct: false},
    ],
  },
  {
    question: 'A 31 -year-old man with AIDS complains of difficulty in swallowing. Examination of his oral cavity demonstrates whitish membranes covering much of his tongue and palate. Endoscopy also reveals several whitish, ulcerated lesions in the esophagus. These pathologic findings are fundamentally caused by loss of which of the following immune cells in this patient?',
    answers: [
      {text: 'Killer T lymphocytes', correct: false},
      {text: 'Monocytes/macrophages', correct: false},
      {text: 'B lymphocytes', correct: false},
      {text: 'nan', correct: false},
      {text: 'Helper T lymphocytes ', correct: true},
    ],
  },
  {
    question: 'Toll-like receptors, recognize bacterial products and stimulate immune response by',
    answers: [
      {text: 'nan', correct: false},
      {text: 'Transcription of nuclear-factor-mediated by NFKB', correct: true},
      {text: 'Perforin- and granzyme-mediated Apoptosis', correct: false},
      {text: 'Cyclin', correct: false},
      {text: 'FADD ligand apoptosis', correct: false},
    ],
  },
  {
    question: ' In an inflammatory response, which of the following are involved in the recognition of the microbes or damaged cells?',
    answers: [
      {text: 'nan', correct: false},
      {text: 'Cytosolic receptor', correct: false},
      {text: 'Toll-like receptors', correct: false},
      {text: 'Mannose-binding lectin protein', correct: false},
      {text: 'All of the above', correct: true},
    ],
  },
  {
    question: 'A 45-year-old male complains of a burning sensation while urinating and increased urinary frequency. On examination, there is tenderness over the suprapubic area and dysuria. Urinalysis reveals leukocyte esterase and nitrites. Which of the following is the most likely diagnosis?',
    answers: [
      {text: ' Cystitis', correct: true},
      {text: ' Nephrolithiasis', correct: false},
      {text: 'Prostatitis', correct: false},
      {text: ' Glomerulonephritis', correct: false},
      {text: 'Pyelonephritis', correct: false},
    ],
  },
  {
    question: 'Which of the following statements is false about transudate?',
    answers: [
      {text: 'It is caused by increased vascular permeability', correct: true},
      {text: 'It is a protein-poor and cell-poor fluid', correct: false},
      {text: 'It is a non-inflammatory edema or effusion', correct: false},
      {text: 'nan', correct: false},
      {text: 'It has a specific gravity of less than 1.012', correct: false},
    ],
  },
  {
    question: 'Rolling, adhesion, and transmigration occur by interactions between complementary adhesion molecules on leukocytes and endothelium. The expression of these adhesion molecules is enhanced by a mediator.  Which of these is not involved in this process?',
    answers: [
      {text: 'nan', correct: false},
      {text: 'Can have paracrine action', correct: false},
      {text: 'Include interleukins ', correct: false},
      {text: 'Cytokines are polypeptides', correct: false},
      {text: 'Produced only in sepsis', correct: true},
    ],
  },
  {
    question: 'Which of the following statements does not apply to acute inflammation?',
    answers: [
      {text: 'Prominent cells involved are monocytes/macrophages and lymphocytes.', correct: true},
      {text: 'Onset is rapid, occurring within minutes or hours.', correct: false},
      {text: 'nan', correct: false},
      {text: 'Local and systemic signs are prominent', correct: false},
      {text: 'Tissue injury is usually mild and self-limited', correct: false},
    ],
  },
  {
    question: 'Major components of acute inflammation are',
    answers: [
      {text: 'Increased vascular permeability', correct: false},
      {text: 'All of the above', correct: false},
      {text: 'nan', correct: false},
      {text: 'Emigration of leukocytes to site of injury', correct: true},
      {text: 'Vasodilation', correct: false},
    ],
  },
  {
    question: 'What is the of type of chronic inflammation?',
    answers: [
      {text: 'Purulent inflammation', correct: false},
      {text: 'Hemorrhagic inflammation', correct: false},
      {text: 'Serous inflammation', correct: false},
      {text: 'Fibrinous inflammation', correct: false},
      {text: 'Granulomatous inflammation', correct: true},
    ],
  },
  {
    question: 'A 14-year-old child, suffering from rheumatism, was admitted to the clinic with complaints of pain in the region of the heart, high fever, shortness of breath. On the 2nd day of hospitalization, death occurred from heart failure. Grossly: the heart is flabby, hypertrophied. Microscopically: edema, hyperemia, blood vessels are surrounded with lymphocytes, histiocytes. What type of inflammation in this case?',
    answers: [
      {text: 'Serous', correct: false},
      {text: 'Interstitial', correct: true},
      {text: 'Purulent', correct: false},
      {text: 'Fibrinous', correct: false},
      {text: 'Granulomatous', correct: false},
    ],
  },
  {
    question: 'The release of arachidonic acid from the membrane phospholipids is mediated mainly through the action of ',
    answers: [
      {text: 'Phospholipase B', correct: false},
      {text: 'nan', correct: false},
      {text: 'Phospholipase C', correct: false},
      {text: 'Phospholipase A2', correct: true},
      {text: 'Phospholipase A1', correct: false},
    ],
  },
  {
    question: 'A 30-year-old female presents with fever, chills, and fatigue for the past three days. She recently recovered from a urinary tract infection treated with antibiotics. On examination, her temperature is 38.8°C (101.8°F), and she has warm, flushed skin. What is the most likely cause of her fever?',
    answers: [
      {text: 'Exogenous pyrogens produced by a viral infection', correct: false},
      {text: 'Hypothalamic dysfunction secondary to antibiotic use', correct: false},
      {text: 'Pyrogens released from normal cellular metabolism', correct: false},
      {text: 'Fever due to an allergic reaction', correct: false},
      {text: 'Endogenous pyrogens released from leukocytes during the infection', correct: true},
    ],
  },
  {
    question: 'Which type of bacterial toxin acts by stimulating the excessive release of cytokines?',
    answers: [
      {text: 'Enterotoxins', correct: false},
      {text: 'Exotoxins', correct: false},
      {text: 'Endotoxins', correct: false},
      {text: 'Superantigens', correct: true},
      {text: 'Neurotoxins', correct: false},
    ],
  },
  {
    question: 'Which of the following bacterial virulence factors directly inhibits phagocytosis by preventing the fusion of lysosomes with phagosomes?',
    answers: [
      {text: 'Capsules', correct: true},
      {text: 'Adhesins', correct: false},
      {text: 'Endotoxins', correct: false},
      {text: 'Exotoxins', correct: false},
      {text: 'Leukocidins', correct: false},
    ],
  },
  {
    question: 'In what cases can we notice processes such as hyperplasia and hypertrophy?',
    answers: [
      {text: 'Skeletal muscle in athelete', correct: false},
      {text: 'Cardiac muscle in cardiomegaly', correct: false},
      {text: 'nan', correct: false},
      {text: 'Pregnant uterus', correct: true},
      {text: 'Breast development in puberty', correct: false},
    ],
  },
  {
    question: 'A 28-year-old woman experienced a decrease in the size of her immobilized leg after an injury. What term is used to refer to this pathology?',
    answers: [
      {text: 'Hyperplasia', correct: false},
      {text: 'nan', correct: false},
      {text: 'Metaplasia', correct: false},
      {text: 'Atrophy', correct: true},
      {text: 'lschemic necrosis', correct: false},
    ],
  },
  {
    question: 'Which organs lack permanent cells?',
    answers: [
      {text: 'nan', correct: false},
      {text: 'Neurons', correct: false},
      {text: 'Skeletal muscle', correct: false},
      {text: 'Cardiac cells', correct: false},
      {text: 'smooth muscle', correct: true},
    ],
  },
  {
    question: 'A patient who died from a hemorrhagic insult. From the anamnesis: he had acute hepatitis 10 years ago. At autopsy, in addition to the changes characteristic of the basic disease, minimal changes in the liver were revealed. What is the recovery mechanism in this case?',
    answers: [
      {text: 'Scar formation', correct: false},
      {text: 'Synthesis of extracellular matrix proteins', correct: false},
      {text: 'Proliferation of connective tissue cells', correct: false},
      {text: 'Regeneration of parenchymal cells', correct: true},
      {text: 'Remodeling of connective tissue', correct: false},
    ],
  },
  {
    question: 'Anaplasia is a hallmark feature of ',
    answers: [
      {text: 'Both benign and malignant tumors', correct: false},
      {text: 'Normal cells', correct: false},
      {text: 'Malignant tumors', correct: true},
      {text: 'Benign tumors', correct: false},
      {text: 'nan', correct: false},
    ],
  },
  {
    question: 'All tumors with invasive properties metastasize(A). Reason (R): The invasive property of the tumor permits them to penetrate into blood vessels or lymphatics, thus allowing them to spread to distant sites. Which of the following statements is true? ',
    answers: [
      {text: 'nan', correct: false},
      {text: 'A is true; B is false', correct: false},
      {text: 'Both A and Rare true, but R is not the  Correct explanation of A', correct: false},
      {text: 'A is false; B is true', correct: true},
      {text: 'Both A and R are true, and R is the Correct explanation of A.', correct: false},
    ],
  },
  {
    question: 'Increased risk of cancer is seen in which of the following? ',
    answers: [
      {text: 'Chronic ulcerative colitis ', correct: true},
      {text: 'Fibroadenoma of breast ', correct: false},
      {text: 'Leiomyoma of the uterus', correct: false},
      {text: 'Bronchial asthma ', correct: false},
      {text: 'nan', correct: false},
    ],
  },
  {
    question: 'Which of the following is/are induced by LMP-1 gene plays a role in oncogenesis? 1. Human T cell leukemia virus type 1. 2. Hepatitis B Virus 3. Epstein Barr virus 4. Human Papilloma Virus ',
    answers: [
      {text: '1 Only ', correct: false},
      {text: '3on1y ', correct: true},
      {text: '2&3 ', correct: false},
      {text: 'nan', correct: false},
      {text: '1&4', correct: false},
    ],
  },
  {
    question: 'What the name of benign tumor arising from columnar epithelium?',
    answers: [
      {text: 'Adenoma', correct: true},
      {text: 'Lipoma', correct: false},
      {text: 'Papilloma', correct: false},
      {text: 'Osteoma', correct: false},
      {text: 'Fibroma', correct: false},
    ],
  },
  {
    question: 'Which of the following statements is not true about adenomas?',
    answers: [
      {text: 'nan', correct: false},
      {text: 'Benign epithelial neoplasm that are derived from glands.', correct: false},
      {text: 'All adenomas form glandular Structures', correct: true},
      {text: 'They may or may not form glandular structures', correct: false},
      {text: 'They are tumors arising from non-Glandular epithelial cells forming glandular structures', correct: false},
    ],
  },
  {
    question: 'Which of the following is a disorganized but benign mass composed of cells indigenous to the involved site?',
    answers: [
      {text: 'Papilloma', correct: false},
      {text: 'Choristoma', correct: false},
      {text: 'Hamartoma', correct: true},
      {text: 'Teratoma', correct: false},
      {text: 'nan', correct: false},
    ],
  },
  {
    question: 'Microscopic examination of thyroid gland biopsy revealed changes in the structure of the gland: a well-differentiated epithelium of the glands with few mitoses and consist of groups of cells. Which type of adenoma occurs in this case',
    answers: [
      {text: 'Cystadenoma', correct: false},
      {text: 'Acinar adenoma', correct: false},
      {text: ' Fibroadenoma', correct: false},
      {text: 'Trabecular adenoma', correct: true},
      {text: 'Tubular adenoma', correct: false},
    ],
  },
  {
    question: 'Which type of nevus often quite rich in melanin pigment',
    answers: [
      {text: 'Intradermal nevus', correct: false},
      {text: 'Junctional nevus', correct: false},
      {text: 'Compound nevus', correct: false},
      {text: 'Juvenile nevus', correct: false},
      {text: 'Blue nevus.', correct: true},
    ],
  },
  {
    question: 'Not a characteristics of \'Dysplastic naevi\' is',
    answers: [
      {text: 'nan', correct: false},
      {text: 'variegated pigmentation', correct: false},
      {text: 'ill defined borders', correct: false},
      {text: 'undulating irregular surfaces', correct: false},
      {text: 'measuring > 10 mm', correct: true},
    ],
  },
  {
    question: 'If anabolism is more than catabolism what would it be means?',
    answers: [
      {text: 'increased protein breakdown', correct: false},
      {text: 'decreased growth protein synthesis', correct: false},
      {text: 'negative nitrogen  balance', correct: false},
      {text: 'decreased stabilized protein synthesis', correct: false},
      {text: 'positive nitrogen balance', correct: true},
    ],
  },
  {
    question: 'Loss proteins with urine (proteinuria) typically leads to which one of following types of edema?',
    answers: [
      {text: 'face region ', correct: false},
      {text: 'abdominal cavity ', correct: false},
      {text: 'pulmonary edema', correct: false},
      {text: 'throughout body ', correct: true},
      {text: 'legs region', correct: false},
    ],
  },
  {
    question: 'Which of the following is a characteristic feature of obesity?',
    answers: [
      {text: 'Elevated levels of high-density lipoprotein (HDL) cholesterol', correct: false},
      {text: 'Low body fat percentage', correct: false},
      {text: 'Decreased appetite', correct: false},
      {text: 'Increased risk of type 1 diabetes', correct: false},
      {text: 'Excessive accumulation of adipose tissue', correct: true},
    ],
  },
  {
    question: 'Macrophages replete by exceeded cholesterol are converted to which one of these cells type?',
    answers: [
      {text: 'APC', correct: false},
      {text: 'foam cells', correct: true},
      {text: 'plasma cells', correct: false},
      {text: 'immunocytes', correct: false},
      {text: 'phagocytes', correct: false},
    ],
  },
  {
    question: 'What symptom does not occur in diabetes mellitus?',
    answers: [
      {text: 'Polyuria', correct: false},
      {text: 'Weight gain', correct: true},
      {text: 'Polydipsia', correct: false},
      {text: 'Weight loss', correct: false},
      {text: 'nan', correct: false},
    ],
  },
  {
    question: 'Which of the following is not found in diabetes',
    answers: [
      {text: 'Fasting blood sugar more than 126 establishes diagnosis of diabetes', correct: false},
      {text: 'Recognised endocrine causes of diabetes include acromegaly and cushing’s syndrome', correct: false},
      {text: 'The majority of type 2 diabetes mellitus patients die from cardiovascular disease', correct: false},
      {text: 'nan', correct: false},
      {text: 'Patients with type 2 diabetes are more prone to ketoacidosis as compared to type 1', correct: true},
    ],
  },
  {
    question: 'Whar does mean the term pathogenesis?',
    answers: [
      {text: 'cause of development', correct: false},
      {text: 'mechanism of death ', correct: false},
      {text: 'clinical manifestations', correct: false},
      {text: 'complications ', correct: false},
      {text: 'the development mechanism', correct: true},
    ],
  },
  {
    question: 'What does mean the term tanatogenesis ?',
    answers: [
      {text: 'clinical manifestations', correct: false},
      {text: 'the development mechanism', correct: false},
      {text: 'complications ', correct: false},
      {text: 'cause of development', correct: false},
      {text: 'mechanism of death ', correct: true},
    ],
  },
  {
    question: 'What does pathological consequences include?',
    answers: [
      {text: 'transition to latent form', correct: false},
      {text: 'self-healing', correct: false},
      {text: 'general weakness', correct: false},
      {text: 'Death', correct: true},
      {text: 'body malaise', correct: false},
    ],
  },
  {
    question: 'What may the classification of diseases include?',
    answers: [
      {text: 'prodrome', correct: false},
      {text: 'terminal', correct: false},
      {text: '?hronic', correct: true},
      {text: 'initial', correct: false},
      {text: 'latent', correct: false},
    ],
  },
  {
    question: 'How is called sign of biologic death characterized by not dissappear by pressing to spot?',
    answers: [
      {text: 'Cadaveric drying', correct: false},
      {text: 'Rigor mortis', correct: false},
      {text: 'Imbibition', correct: true},
      {text: 'Cadaveric decomposition', correct: false},
      {text: 'Cadaveric cooling', correct: false},
    ],
  },
  {
    question: 'How is called sign of biologic death which associated with evaporation of fluid? ',
    answers: [
      {text: 'Rigor mortis', correct: false},
      {text: 'Cadaveric cooling ', correct: false},
      {text: 'Cadaveric spots ', correct: false},
      {text: 'Cadaveric decomposition', correct: false},
      {text: 'Cadaveric drying', correct: true},
    ],
  },
  {
    question: 'Which cellls most sensitive to hypoxia?',
    answers: [
      {text: 'Myocardial cells ', correct: false},
      {text: 'nan', correct: false},
      {text: 'Hepatocytes', correct: false},
      {text: 'Neurons', correct: true},
      {text: 'Renal tubular epithelial cells', correct: false},
    ],
  },
  {
    question: 'If patient has decreased arterio-venous difference of O2, which type of hypoxia more probably is it?',
    answers: [
      {text: 'hemic hypoxia', correct: false},
      {text: 'exogenous hypoxia', correct: false},
      {text: 'respiratory hypoxia', correct: false},
      {text: 'circulatory hypoxia', correct: false},
      {text: 'histogenous hypoxia', correct: true},
    ],
  },
  {
    question: 'A scientist Dr. Gobind was asked to participate in a research project on myocardial infarction in a rabbit model. Which of the following occurs in ischemic cell injury? ',
    answers: [
      {text: 'Influx of K+ and Ca++', correct: false},
      {text: 'Influx of Na+ and Ca++', correct: true},
      {text: 'nan', correct: false},
      {text: 'Efflux of K+ and Na+', correct: false},
      {text: 'Influx of K+ and H 2o', correct: false},
    ],
  },
  {
    question: 'Among the following, what is the correct sequence of events that occur during necrosis? 1) Cell swelling 2) Karyolysis 3) Karyorrhexis 4) Pyknosis',
    answers: [
      {text: '2,3, 4, 1', correct: false},
      {text: 'nan', correct: false},
      {text: '1, 4, 3, 2', correct: true},
      {text: '4, 3, 2, 1', correct: false},
      {text: '1,2, 3,4', correct: false},
    ],
  },
  {
    question: 'Which cellular organelle is typically affected in reversible cell injury?',
    answers: [
      {text: 'Endoplasmic reticulum', correct: false},
      {text: 'Mitochondria', correct: true},
      {text: 'Lysosomes', correct: false},
      {text: 'Nucleus', correct: false},
      {text: 'Golgi apparatus', correct: false},
    ],
  },
  {
    question: 'A 45-year-old male smoker complains of shortness of breath and cough. Lung biopsy shows hypertrophy and hyperplasia of bronchial epithelial cells. Which cellular adaptation is most likely occurring in this patient\'s lungs?',
    answers: [
      {text: 'Dysplasia', correct: false},
      {text: 'Atrophy', correct: false},
      {text: 'Metaplasia', correct: false},
      {text: 'Hyperplasia', correct: false},
      {text: 'Hypertrophy', correct: true},
    ],
  },
  {
    question: 'Which of the following processes is irreversible?',
    answers: [
      {text: 'Fatty change', correct: false},
      {text: 'Hydropic swelling', correct: false},
      {text: 'Visible vacuoles in cytoplasm', correct: false},
      {text: 'Karyorrhexis', correct: true},
      {text: 'nan', correct: false},
    ],
  },
  {
    question: 'Which type of necrosis occurs in patients having a history of trauma?',
    answers: [
      {text: 'Gangrene', correct: false},
      {text: 'Fat nonenzymatic necrosis', correct: true},
      {text: 'Liquefactive necrosis', correct: false},
      {text: 'Fibrinoid necrosis', correct: false},
      {text: 'Coagulative necrosis', correct: false},
    ],
  },
  {
    question: 'A 5O-year-old chronic alcoholic presents to the emergency room with 12 hours of severe abdominal pain. The pain radiates to the back and is associated with an urge to vomit. Physical examination discloses exquisite abdominal tenderness. Laboratory studies show elevated serum amylase. Which of following morphologic changes would be expected in the peripancreatic tissue of this patient?',
    answers: [
      {text: 'Fat necrosis ', correct: true},
      {text: 'coagulative necrosis ', correct: false},
      {text: 'Caseous necrosis ', correct: false},
      {text: 'Fibrinoid necrosis', correct: false},
      {text: 'nan', correct: false},
    ],
  },
  {
    question: 'Apoptosis literally means',
    answers: [
      {text: 'Falling off', correct: true},
      {text: 'Natural death', correct: false},
      {text: 'nan', correct: false},
      {text: 'Shrink', correct: false},
      {text: 'Die in peace', correct: false},
    ],
  },
  {
    question: 'Mark the correct statement(s) regarding Caspases: 1) It is an alanine protease in nature 2) Active caspase is a marker for cells undergoing apoptosis. 3) Exists as zymogens and undergo cleavage to get activated 4) Independent of proapoptotic and antiapoptotic proteins 5) Required for embryogenesis ',
    answers: [
      {text: 'Only 1,2,3 is correct ', correct: false},
      {text: 'Only 1,2.4 is correct ', correct: false},
      {text: 'Only 2,3,5 is correct ', correct: true},
      {text: 'nan', correct: false},
      {text: 'Only 2 is correct  ', correct: false},
    ],
  },
  {
    question: 'In which of the following organs fatty changes are not seen?',
    answers: [
      {text: 'Liver', correct: false},
      {text: 'Heart', correct: false},
      {text: 'Lungs', correct: true},
      {text: 'Muscles', correct: false},
      {text: 'Kidney', correct: false},
    ],
  },
  {
    question: 'What is the name of the pathological process which is associated with               accumulation of cholesterol and cholesterol esters with formation of tumorous masses?',
    answers: [
      {text: 'Atheroma', correct: false},
      {text: 'Adenoma', correct: false},
      {text: 'Teratoma', correct: false},
      {text: 'Papilloma', correct: false},
      {text: 'Xantoma', correct: true},
    ],
  },
  {
    question: 'A 68-year-old deceased had changes in the coronary vessels and aorta. Grossly: the walls of the vessels are thickened, hard, with plaques. What pathological process developed in this case?',
    answers: [
      {text: 'Accumulation of amyloid', correct: false},
      {text: 'Accumulation of cholesterol', correct: true},
      {text: 'Accumulation of carbohydrates', correct: false},
      {text: 'Accumulation of proteins', correct: false},
      {text: 'Accumulation of lipids', correct: false},
    ],
  },
  {
    question: 'What the name of the cells accumulating fat within the intimal layer of aorta and large arteries in atherosclerotic plaques?',
    answers: [
      {text: 'Leukocytes', correct: false},
      {text: 'Lymphocytes', correct: false},
      {text: 'Fibroblasts', correct: false},
      {text: 'Epithelial cells', correct: false},
      {text: 'Foam cells', correct: true},
    ],
  },
  {
    question: 'A 50-year-old patient with chronic renal failure underwent biopsy. When staining with Congo-Red, it was revealed: extracellular, homogeneous, structure less, masses, red color. What type of dystrophy in this case? ',
    answers: [
      {text: 'Hyalinosis', correct: false},
      {text: 'Fatty change', correct: false},
      {text: 'Hemochromatosis', correct: false},
      {text: 'Amyloidosis', correct: true},
      {text: 'Hemosiderosis', correct: false},
    ],
  },
  {
    question: 'What do amyloid fibrils represent?',
    answers: [
      {text: ' Cellular organelles', correct: false},
      {text: 'Liquid inclusions in cells', correct: false},
      {text: ' Insoluble fibrils in the extracellular ', correct: true},
      {text: ' Soluble proteins in cells', correct: false},
      {text: 'Cellular structures that enable movement', correct: false},
    ],
  },
  {
    question: 'What the name of substance with fibrillary structure which forms under the pathological conditions?',
    answers: [
      {text: 'Reabsorbtion droplets', correct: false},
      {text: 'Lipids', correct: false},
      {text: 'Calcificates', correct: false},
      {text: 'Amyloid', correct: true},
      {text: 'Russell bodies', correct: false},
    ],
  },
  {
    question: 'What causes of posthepatic jaundice?',
    answers: [
      {text: 'Heterohemotransfusions ', correct: false},
      {text: 'Hepatitis', correct: false},
      {text: 'Hemolytic disease of newborns', correct: false},
      {text: 'Liver cirrhosis ', correct: false},
      {text: 'Obstruction of bile ducts by stones', correct: true},
    ],
  },
  {
    question: 'Which of the fol lowing are true about Xeroderma pigmentosum : A. Skin manifestations appear within first 2 years of life B. Increased risk of non melanotic skin cancers c. Nucleotide excision repair defect D. Autosomal dominant inheritance ',
    answers: [
      {text: 'A and Bare true ', correct: false},
      {text: 'B, C, D are true', correct: false},
      {text: 'B C Only', correct: false},
      {text: 'A, B, C are true ', correct: true},
      {text: 'nan', correct: false},
    ],
  },
  {
    question: 'Which pigment derived from hemoglobin found in normal conditions? ',
    answers: [
      {text: 'Porphyrin', correct: false},
      {text: 'Hemin ', correct: false},
      {text: 'Bilirubin', correct: true},
      {text: ' Hemomelanin', correct: false},
      {text: 'Hematoidin', correct: false},
    ],
  },
  {
    question: 'At 33-year-old patient have white skin color, blond hair, poor vision and severe photophobia. They are highly sensitive to sunlight. What pigment exchange disorder is there in this case?',
    answers: [
      {text: 'Melanin', correct: true},
      {text: 'Porphyrins', correct: false},
      {text: 'Hematoidin', correct: false},
      {text: 'Hemosiderin', correct: false},
      {text: 'Bilirubin', correct: false},
    ],
  },
  {
    question: 'What is metastatic calcification?',
    answers: [
      {text: 'deposition of calcium salts in dead tissues', correct: false},
      {text: 'Hypervitaminosis D', correct: false},
      {text: 'derangement in calcium and phosphate metabolism', correct: false},
      {text: 'Increased bone catabolism', correct: false},
      {text: 'deposition of calcium salts in normal tissues', correct: true},
    ],
  },
  {
    question: 'Which of the following is true about calcification? Which organ will not have metastatic calcification?',
    answers: [
      {text: 'Psammoma body is formed with dystrophic calcification ', correct: true},
      {text: 'nan', correct: false},
      {text: 'It is most commonly seen in the kidneys ', correct: false},
      {text: 'Serum calcium is normal in metastatic calcification ', correct: false},
      {text: 'Mitochondria is the rarest organelle affected in calcification', correct: false},
    ],
  },
  {
    question: 'Which of the following conditions is characterized by a primary respiratory acidosis?',
    answers: [
      {text: 'Excessive vomiting', correct: false},
      {text: 'Diabetic ketoacidosis', correct: false},
      {text: 'Renal failure', correct: false},
      {text: 'Chronic obstructive pulmonary disease (COPD)', correct: true},
      {text: 'Hypokalemia', correct: false},
    ],
  },
  {
    question: 'A 54-year-old male patient in renal failure has missed a round of dialysis and was feeling sick. What is the probable acid-base disorder that we can expect in this patient?',
    answers: [
      {text: 'Respiratory Acidosis', correct: false},
      {text: 'nan', correct: false},
      {text: 'Respiratory Alkalosis', correct: false},
      {text: 'Metabolic Acidosis', correct: true},
      {text: 'Metabolic Alkalosis', correct: false},
    ],
  },
  {
    question: 'What is the primary treatment for dehydration?',
    answers: [
      {text: 'Restricting fluid intake', correct: false},
      {text: 'Administering diuretics', correct: false},
      {text: 'Administering antihistamines', correct: false},
      {text: 'Fluid replacement', correct: true},
      {text: 'Administering antidiuretic hormone', correct: false},
    ],
  },
  {
    question: 'Which of the following may cause edema? 1. Elevated vascular hydrostatic pressure 2. Reduced vascular hydrostatic pressure 3. Elevated plasma osmotic pressure 4. Reduced plasma osmotic pressure',
    answers: [
      {text: '1 and 3', correct: false},
      {text: '1 and 4', correct: true},
      {text: '2 and 3', correct: false},
      {text: '2 and 4', correct: false},
      {text: 'nan', correct: false},
    ],
  },
  {
    question: 'Macro signs of arterial hyperemia is which one of these?',
    answers: [
      {text: 'decreased number of capillaries', correct: false},
      {text: 'increased number of capillaries', correct: false},
      {text: 'fast blood flow', correct: false},
      {text: 'increased tissue turgor', correct: true},
      {text: 'low local temperature', correct: false},
    ],
  },
  {
    question: 'A 66-year-old patient suffered from chronic ischemic heart disease died from chronic heart failure accompanied by chronic venous hyperemia of internal organs. At autopsy: the lung tissue is brown, hard, airless. Microscopically: accumulation of hemosiderin and fibrosis of the lung tissue are determined. What term is used for this pathological process in lungs?',
    answers: [
      {text: 'Congestive induration', correct: false},
      {text: 'Nutmeg lungs', correct: false},
      {text: 'Cirrhosis of lung', correct: false},
      {text: 'Muscat cirrhosis', correct: false},
      {text: 'Brown induration', correct: true},
    ],
  },
  {
    question: 'Indicate what one of following signs Virchow’s triad, as etiology of one of local circulation disorders, includes?',
    answers: [
      {text: 'injured vessel wall', correct: true},
      {text: 'hypocoagubility', correct: false},
      {text: 'smoot vessel wall', correct: false},
      {text: 'fast blood flow', correct: false},
      {text: 'low oxyhemoglobin', correct: false},
    ],
  },
  {
    question: 'Which outcome of thrombus is characteristic by dislodge and transport to other sites?',
    answers: [
      {text: 'Propagation ', correct: false},
      {text: 'Calcification', correct: false},
      {text: 'Suppuration', correct: false},
      {text: 'Dissolution', correct: false},
      {text: 'Embolization', correct: true},
    ],
  },
  {
    question: 'What type of embolism can occur in bone fracture?',
    answers: [
      {text: 'Microbial embolism', correct: false},
      {text: 'Thromboembolism', correct: false},
      {text: 'Fat embolism', correct: true},
      {text: 'Gas embolism', correct: false},
      {text: 'Amniotic fluid embolism', correct: false},
    ],
  },
  {
    question: 'Which type of embolism can cause a syndrome similar to acute respiratory distress syndrome (ARDS), with rapid development of severe hypoxemia and neurologic changes?',
    answers: [
      {text: 'Amniotic fluid embolism', correct: false},
      {text: ' Air embolism', correct: false},
      {text: ' Foreign body embolism.', correct: false},
      {text: ' Fat embolism', correct: true},
      {text: 'Septic embolism', correct: false},
    ],
  },
  {
    question: 'Which feature characterizes ischemia as a local circulation disorder?',
    answers: [
      {text: 'redness', correct: false},
      {text: 'edema', correct: false},
      {text: 'cyanosis', correct: false},
      {text: 'increased blood flow', correct: false},
      {text: 'pallor', correct: true},
    ],
  },
  {
    question: 'During ischemia will be pale color of tissue due to which one of following?',
    answers: [
      {text: 'decreased  number of functional capillaries', correct: true},
      {text: 'increased number of functional capillaries', correct: false},
      {text: 'increased oxyhemoglobin', correct: false},
      {text: 'increased hemoglobin level', correct: false},
      {text: 'reduced hemoglobignal level', correct: false},
    ],
  },
  {
    question: 'Which term used for hemorrhage from urinary system? ',
    answers: [
      {text: 'Epistaxis', correct: false},
      {text: 'Metrorrhagia', correct: false},
      {text: 'Haematemesis', correct: false},
      {text: 'Haemoptoe', correct: false},
      {text: 'Haematuria', correct: true},
    ],
  },
  {
    question: 'A 63-year-old patient who suffered from myocardial infarction and died from  acute heart failure. During autopsy was revealed: defect of the wall of left ventricle and blood in the pericardial cavity. Which term is used for this type of hemorrhage?',
    answers: [
      {text: 'Hematomesis', correct: false},
      {text: 'Hemoperitoneum', correct: false},
      {text: 'Hemarthrosis', correct: false},
      {text: 'Hemothorax', correct: false},
      {text: 'Hemopericardium ', correct: true},
    ],
  },
  {
    question: 'Shock due to cardiac tamponade is an example of ',
    answers: [
      {text: 'Endocrine shock', correct: false},
      {text: 'Obstructive shock', correct: true},
      {text: 'nan', correct: false},
      {text: 'Hypovolemic shock', correct: false},
      {text: 'Distributive shock', correct: false},
    ],
  },
  {
    question: 'A patient 30 years old after the injection developed edema, redness and itching at the injection site, a severe decrease of blood pressure (40/20 mm Hg). Pathanatomical examination revealed: fluid blood in the vessels, accumulation of blood in microcirculatory vessels, disseminated intravascular coagulation, “shock kidney”, “shock lung”. Which type of shock occurs in this case? ',
    answers: [
      {text: 'Cardiogenic', correct: false},
      {text: 'Hypovolemic', correct: false},
      {text: 'Septic', correct: false},
      {text: 'Traumatic ', correct: false},
      {text: 'Anaphylactic ', correct: true},
    ],
  },
  {
    question: 'In which type of shock we can see decreased of the peripheral vascular resistance? ',
    answers: [
      {text: 'Hypovolemic shock', correct: true},
      {text: 'Obstructive shock', correct: false},
      {text: 'Cardiogenic shock', correct: false},
      {text: 'nan', correct: false},
      {text: 'Distributive shock', correct: false},
    ],
  },
  {
    question: 'An immunocompromised patient presents in the ER with fever, dyspnea and altered sensorium. His heart rate is 124 bpm, BP is 90/66 mm of Hg, and his central venous pressure (CVP) is low. What is the patient suffering from?',
    answers: [
      {text: 'Obstructive shock', correct: false},
      {text: 'Hypovolemic shock', correct: false},
      {text: 'Cardiogenic shock', correct: false},
      {text: 'nan', correct: false},
      {text: 'Septic shock', correct: true},
    ],
  },
  {
    question: 'Which of the following best describes the primary initiating event in the pathophysiology of DIC?',
    answers: [
      {text: 'Dissemination of malignant cells into the bloodstream', correct: false},
      {text: 'Endothelial injury resulting in exposure of subendothelial collagen', correct: false},
      {text: 'Activation of the intrinsic pathway of coagulation', correct: false},
      {text: 'Impaired fibrinolysis leading to fibrin deposition', correct: false},
      {text: 'Release of tissue factor into circulation', correct: true},
    ],
  },
  {
    question: 'A 30-year-old pregnant female presents to the obstetrics ward with complaints of vaginal bleeding, abdominal pain, and decreased fetal movement. Laboratory tests show thrombocytopenia, elevated fibrin degradation products (FDPs), and prolonged clotting times. Obstetric ultrasound reveals intrauterine fetal demise. What is the most likely diagnosis?',
    answers: [
      {text: 'Disseminated intravascular coagulation (DIC)', correct: true},
      {text: 'Thrombotic thrombocytopenic purpura', correct: false},
      {text: 'HELLP syndrome', correct: false},
      {text: 'Antiphospholipid syndrome', correct: false},
      {text: 'Acute fatty liver of pregnancy', correct: false},
    ],
  },
  {
    question: 'Most potent stimulator of naive T cell is: ',
    answers: [
      {text: 'Dendritic cell ', correct: true},
      {text: 'B cell', correct: false},
      {text: 'nan', correct: false},
      {text: 'Plasma cell ', correct: false},
      {text: 'Macrophages ', correct: false},
    ],
  },
  {
    question: 'A 32-year-old male presents with recurrent episodes of abdominal pain, diarrhea, and bloody stools. Colonoscopy reveals areas of inflammation and ulceration in the colon. What inflammatory bowel disease is he likely suffering from?',
    answers: [
      {text: 'Celiac disease', correct: false},
      {text: 'Ulcerative colitis', correct: true},
      {text: 'Irritable bowel syndrome (IBS)', correct: false},
      {text: 'Crohn\'s disease', correct: false},
      {text: 'Diverticulitis', correct: false},
    ],
  },
  {
    question: 'Which autoimmune disorder is associated with elevated levels of antinuclear antibodies and decreased complement levels?',
    answers: [
      {text: 'Crohn\'s disease', correct: false},
      {text: 'Multiple sclerosis', correct: false},
      {text: 'Rheumatoid arthritis', correct: false},
      {text: 'Systemic lupus erythematosus (SLE)', correct: true},
      {text: 'Type 1 diabetes mellitus', correct: false},
    ],
  },
  {
    question: 'Oxygen burst I Respiratory burst is the ra pid release of reactive oxygen species , superoxide anions and hydrogen peroxide from different cell types. Plays a vital role in cell signalling. Which of the following helps in generat ing oxygen burst in the neutrophils? ',
    answers: [
      {text: 'NADPH oxidase', correct: true},
      {text: 'Catalase ', correct: false},
      {text: 'Superoxide dismutase', correct: false},
      {text: 'Glutathione peroxidase ', correct: false},
      {text: 'nan', correct: false},
    ],
  },
  {
    question: 'Which mechanism of immune response is characterized by specific recognition and attack of pathogens?',
    answers: [
      {text: ' Cellular immunity', correct: true},
      {text: ' Antibodies', correct: false},
      {text: 'Apoptosis', correct: false},
      {text: 'Inflammation', correct: false},
      {text: ' Phagocytosis', correct: false},
    ],
  },
  {
    question: 'Which of the following molecules is the major signaling protein that activates immune cells and is involved in the inflammatory response?',
    answers: [
      {text: 'Interleukin-2', correct: false},
      {text: ' Tumor Necrosis Factor (TNF)', correct: true},
      {text: ' Interferon', correct: false},
      {text: 'Interferon gamma', correct: false},
      {text: 'Transforming Growth Factor Beta (TGF-?)', correct: false},
    ],
  },
  {
    question: 'Which of the following mechanisms is associated with the development of allergic reactions?',
    answers: [
      {text: 'Increased production of IgG antibodies', correct: false},
      {text: 'Desensitization of mast cells', correct: false},
      {text: 'Suppression of cytokine release', correct: false},
      {text: 'Sensitization of mast cells', correct: true},
      {text: 'Activation of regulatory T cells', correct: false},
    ],
  },
  {
    question: 'A 35-year-old woman presents with recurrent hives and swelling of the lips and face after eating certain foods. She has noticed these symptoms after consuming shellfish, nuts, and strawberries. Skin prick testing reveals sensitization to multiple food allergens. What dietary modification could help prevent future allergic reactions?',
    answers: [
      {text: 'Elimination of identified food allergens', correct: true},
      {text: 'Avoidance of fruits and vegetables', correct: false},
      {text: 'Fasting for extended periods', correct: false},
      {text: 'Incorporating probiotics into the diet', correct: false},
      {text: 'Increasing intake of allergenic foods', correct: false},
    ],
  },
  {
    question: 'During a Type 1 hypersensitive reaction, the binding of allergens to IgE antibodies on mast cells triggers the release of:',
    answers: [
      {text: 'Complement proteins', correct: false},
      {text: 'Antibodies', correct: false},
      {text: 'Histamine', correct: true},
      {text: 'Interleukins', correct: false},
      {text: 'Interferons', correct: false},
    ],
  },
  {
    question: 'Which of the following best describes the mechanism of Type 2 Hypersensitivity?',
    answers: [
      {text: 'Local immune complex injury', correct: false},
      {text: 'Antibody-dependent cell-mediated cytotoxicity', correct: true},
      {text: 'Immune response to soluble antigens in the blood', correct: false},
      {text: 'Immune complex deposition', correct: false},
      {text: 'Delayed-type hypersensitivity', correct: false},
    ],
  },
  {
    question: 'A 20-year-old gardener presents to his family physician with his hands and arms appearing red, covered with oozing blisters and crusts. Which of the following best describes the pathogenesis of these skin lesions? ',
    answers: [
      {text: 'Deposition of circulating immune complexes', correct: false},
      {text: 'nan', correct: false},
      {text: 'Cytotoxic antibody production ', correct: false},
      {text: 'Deposition of antigluten antibodies ', correct: false},
      {text: 'Delayed-type hypersensitivity', correct: true},
    ],
  },
  {
    question: 'Hyperacute rejection is due to',
    answers: [
      {text: 'Circulating macrophage- mediated injury', correct: false},
      {text: 'Cytotoxic T lymphocyte-mediated injury ', correct: false},
      {text: 'Preformed antibodies', correct: true},
      {text: 'Endothelitis caused by donor antibodies', correct: false},
      {text: 'nan', correct: false},
    ],
  },
  {
    question: 'Method of prevention of GVHD in bone marrow transplantation is: ',
    answers: [
      {text: 'nan', correct: false},
      {text: 'T-cell removal', correct: false},
      {text: 'AlI are correct', correct: true},
      {text: 'Prior immune suppression ', correct: false},
      {text: 'Post procedure immune suppression', correct: false},
    ],
  },
  {
    question: 'Which primary immunodeficiency disorder is characterized by selective deficiency of immunoglobulin A (IgA), leading to recurrent respiratory and gastrointestinal infections?',
    answers: [
      {text: 'Chronic granulomatous disease', correct: false},
      {text: 'X-linked agammaglobulinemia', correct: false},
      {text: 'Severe combined immunodeficiency', correct: false},
      {text: 'Selective IgA deficiency', correct: true},
      {text: 'Common variable immunodeficiency', correct: false},
    ],
  },
  {
    question: 'A 12-year-old girl presents with recurrent skin abscesses and lymphadenopathy. Laboratory tests show impaired phagocytosis by neutrophils. What primary immunodeficiency disorder is she likely suffering from?',
    answers: [
      {text: 'Severe combined immunodeficiency', correct: false},
      {text: 'Chronic granulomatous disease', correct: true},
      {text: 'Selective IgA deficiency', correct: false},
      {text: 'Common variable immunodeficiency', correct: false},
      {text: 'X-linked agammaglobulinemia', correct: false},
    ],
  },
  {
    question: 'Risk of HIV transmission is not seen with: ',
    answers: [
      {text: 'nan', correct: false},
      {text: 'Plasma derived Hepatitis B vaccine ', correct: true},
      {text: 'Leucocytes', correct: false},
      {text: 'Platelets ', correct: false},
      {text: 'Whole blood ', correct: false},
    ],
  },
  {
    question: 'A 28-year-old woman presents with fever, weight loss, and generalized lymphadenopathy. She reports unprotected sexual intercourse with multiple partners. On examination, she has oral hairy leukoplakia and Pneumocystis jirovecii pneumonia. What is the most likely diagnosis?',
    answers: [
      {text: 'Primary immunodeficiency', correct: false},
      {text: 'Secondary immunodeficiency', correct: true},
      {text: 'Hypersensitivity reaction', correct: false},
      {text: 'Chronic granulomatous disease', correct: false},
      {text: 'Sarcoidosis', correct: false},
    ],
  },
  {
    question: 'Which of the following is a systemic sign of severe inflammation characterized by decreased blood pressure and organ dysfunction? ',
    answers: [
      {text: 'Anaphylaxis', correct: false},
      {text: 'Leukocytosis', correct: false},
      {text: 'Erythema', correct: false},
      {text: 'Sepsis', correct: true},
      {text: 'Hyperemia', correct: false},
    ],
  },
  {
    question: 'What is the term for the process by which neutrophils squeeze through endothelial gaps to migrate to the site of injury or infection?',
    answers: [
      {text: ' Phagocytosis ', correct: false},
      {text: ' Exocytosis', correct: false},
      {text: ' Diapedesis ', correct: true},
      {text: 'Margination ', correct: false},
      {text: ' Chemotaxis ', correct: false},
    ],
  },
  {
    question: 'A 60-year-old obese male presents with severe pain, redness, and swelling in his left big toe. He reports a history of consuming a high-purine diet and excessive alcohol intake. Laboratory investigations reveal elevated serum uric acid levels. Which of the following is the most likely diagnosis?',
    answers: [
      {text: ' Ankylosing spondylitis', correct: true},
      {text: ' Rheumatoid arthritis', correct: false},
      {text: ' Gouty arthritis', correct: false},
      {text: ' Septic arthritis', correct: false},
      {text: 'Osteoarthritis', correct: false},
    ],
  },
  {
    question: 'An anti-inflammatory cytokine is ',
    answers: [
      {text: 'IL-1', correct: false},
      {text: 'IFNy', correct: false},
      {text: 'IL-4', correct: true},
      {text: 'TNF', correct: false},
      {text: 'nan', correct: false},
    ],
  },
  {
    question: 'A 33 year old male presents with complaints of Itching and generalised redness who developed erythematous pruritic lesions all over the body which was triggered after washing his clothes. Which statement is not true in this case?',
    answers: [
      {text: 'It causes dilation of arterioles ', correct: false},
      {text: 'Histamine receptor agonists are used to treat allergies.', correct: true},
      {text: 'It increases the permeability of venules ', correct: false},
      {text: 'Histamine is a principal mediator of immediate transient response during acute inflammation.', correct: false},
      {text: 'nan', correct: false},
    ],
  },
  {
    question: 'What is the name of the inflammation, characterized by the outpouring of low-protein fluid?',
    answers: [
      {text: 'Purulent inflammation', correct: false},
      {text: 'Catarrhal inflammation', correct: false},
      {text: 'Serous inflammation', correct: true},
      {text: 'Hemorrhagic inflammation', correct: false},
      {text: 'Fibrinous inflammation', correct: false},
    ],
  },
  {
    question: 'Cell to cell permeability occurs through:',
    answers: [
      {text: 'Connexins', correct: true},
      {text: 'Occludin', correct: false},
      {text: 'Zonulin', correct: false},
      {text: 'Zona adherens', correct: false},
      {text: 'nan', correct: false},
    ],
  },
  {
    question: 'Which of these is not a granulomatous disease',
    answers: [
      {text: 'Tuberculosis', correct: false},
      {text: 'Neutrophil infiltration', correct: false},
      {text: 'Amebiasis', correct: true},
      {text: 'Sarcoidosis', correct: false},
      {text: 'Leprosy', correct: false},
    ],
  },
  {
    question: 'Chronic granulomatous disease is:',
    answers: [
      {text: 'A benign neoplastic process', correct: false},
      {text: 'Margination', correct: false},
      {text: 'A parasitic disease', correct: false},
      {text: 'Associated with formation of multiple granulomas', correct: true},
      {text: 'Acquired leukocyte function defect', correct: false},
    ],
  },
  {
    question: 'Prostaglandin causing fever is: ',
    answers: [
      {text: 'PGE1', correct: false},
      {text: 'PGE2 ', correct: true},
      {text: 'PGF2 ', correct: false},
      {text: 'PGT2', correct: false},
      {text: 'nan', correct: false},
    ],
  },
  {
    question: 'A 55-year-old male with a history of rheumatoid arthritis presents with recurrent episodes of fever, joint pain, and fatigue. He is currently on immunosuppressive therapy. Laboratory tests reveal elevated levels of inflammatory markers. What is the likely explanation for his recurrent fevers?',
    answers: [
      {text: 'Side effect of his medication', correct: false},
      {text: 'Hypothalamic dysfunction caused by long-term immunosuppressive therapy', correct: false},
      {text: 'Endogenous pyrogen release due to his autoimmune condition', correct: true},
      {text: 'Fever of unknown origin', correct: false},
      {text: 'Exogenous pyrogens produced by an underlying infection', correct: false},
    ],
  },
  {
    question: 'Which type of viral genome integrates into the host cell\'s DNA and remains latent, occasionally reactivating to produce new virions?',
    answers: [
      {text: 'Double-stranded RNA ', correct: false},
      {text: 'Double-stranded DNA ', correct: false},
      {text: 'Single-stranded DNA ', correct: false},
      {text: 'Single-stranded RNA', correct: false},
      {text: 'Retrovirus', correct: true},
    ],
  },
  {
    question: 'In viral replication, which enzyme is responsible for synthesizing a complementary RNA strand from a viral RNA template?',
    answers: [
      {text: 'Reverse transcriptase ', correct: false},
      {text: 'DNA ligase', correct: false},
      {text: 'DNA polymerase ', correct: false},
      {text: 'RNAase ', correct: false},
      {text: 'RNA-dependent RNA polymerase', correct: true},
    ],
  },
  {
    question: 'Definition of Metaplasia is',
    answers: [
      {text: 'Columnar is the most common type', correct: true},
      {text: 'Can occurs at stem cells level', correct: false},
      {text: 'Involves only epithelial cells', correct: false},
      {text: 'Is irreversible', correct: false},
      {text: 'nan', correct: false},
    ],
  },
  {
    question: 'A 56 Yr old Female complaints of heavy menstrual bleeding for the past 1 month,associated with pain. She added that her last menstruation was 10 years back. On Per Vaginalexamination, Non-Bloody vaginal discharge noted & patient was irritable and anxious during examination. Endometrial !biopsy was taken in OPD which revealed atypical cells. Which pathological process we will not find in this case?',
    answers: [
      {text: 'Pathological hyperplasia can be a risk factor for malignancy ', correct: false},
      {text: 'Seen in cells capable of dividing (labile cells)', correct: false},
      {text: 'Bone marrow hyperplasia is not seen in response to peripheral blood cytopenias', correct: true},
      {text: 'nan', correct: false},
      {text: 'There is an increase in the number of cells', correct: false},
    ],
  },
  {
    question: 'Which organs lack stable cells?',
    answers: [
      {text: 'Smooth muscle', correct: false},
      {text: 'Pancreas', correct: false},
      {text: 'Skeletal muscle', correct: true},
      {text: 'nan', correct: false},
      {text: 'Liver', correct: false},
    ],
  },
  {
    question: ' The patient consulted a surgeon at the clinic with a wound in the area of the right shoulder joint. The bottom of the wound upon examination has a fine-grained surface of a red-pink color. Which of the following types of regeneration develops in this case?',
    answers: [
      {text: 'humoral regeneration', correct: false},
      {text: 'physiological regeneration', correct: false},
      {text: 'Incomplete reparative regeneration', correct: true},
      {text: 'pathological regeneration', correct: false},
      {text: 'complete reparative regeneration', correct: false},
    ],
  },
  {
    question: 'Which of the following is not a sign of a malignancy',
    answers: [
      {text: 'Sensitivity to growth-inhibitory signals', correct: true},
      {text: 'Self-sufficiency in growth signals', correct: false},
      {text: 'Sustained angiogenesis', correct: false},
      {text: 'nan', correct: false},
      {text: 'Evasion of apoptosis', correct: false},
    ],
  },
  {
    question: 'A 68 yr old woman with a repeated bouts of pneumonia and H/O heavy smoking presents with a 2-week history of fever and productive cough. A chest X-ray reveals a right lower lobe infiltrates confirming pneumonia. A transbronchial biopsy was done revealing preneoplastic changes within the bronchial mucosa. Which of the following best characterizes the morphology of this bronchial mucosa lesion?',
    answers: [
      {text: 'nan', correct: false},
      {text: 'Increased numbers of otherwise normal cells ', correct: false},
      {text: 'Cellular maturation shows abnormal pattern ', correct: true},
      {text: 'Invasiveness ', correct: false},
      {text: 'presence of poorly diiferentiated keratin producing cells', correct: false},
    ],
  },
  {
    question: ' Classification of neoplasms by WHO is based on',
    answers: [
      {text: 'Differentiation of tumors', correct: false},
      {text: 'Etiology of tumors', correct: false},
      {text: '.Localization of tumors.', correct: false},
      {text: 'Histogenesis of tumors.', correct: true},
      {text: 'Morphogenesis of tumors', correct: false},
    ],
  },
  {
    question: 'Growth of tumor into the lumen of hollow organ is called',
    answers: [
      {text: 'Endophytic', correct: false},
      {text: 'Exophytic', correct: true},
      {text: 'Expansive', correct: false},
      {text: 'Invasive', correct: false},
      {text: 'Unicentric', correct: false},
    ],
  },
  {
    question: 'Where is localized squamous cell papilloma?',
    answers: [
      {text: 'Vagina', correct: true},
      {text: 'Calyces of kidney', correct: false},
      {text: 'Urethra', correct: false},
      {text: 'Ureter', correct: false},
      {text: 'Pelvis of kidney ', correct: false},
    ],
  },
  {
    question: 'A 45-year-old woman presents with complaints of post-coital bleeding. She is diagnosed to have invasive carcinoma of the cervix. Which of the following features differentiate invasive carcinoma from dysplasia or carcinoma in situ?',
    answers: [
      {text: 'nan', correct: false},
      {text: 'Pleomorphism', correct: false},
      {text: 'Invasion of the basement membrane', correct: true},
      {text: 'Nuclear hyperchromasia', correct: false},
      {text: 'Typical mitoses', correct: false},
    ],
  },
  {
    question: 'Overgrowth of a bile duct at localized region is?',
    answers: [
      {text: 'Malignant tumor', correct: false},
      {text: 'nan', correct: false},
      {text: 'Hamartoma', correct: true},
      {text: 'Polyp', correct: false},
      {text: 'Choriostoma', correct: false},
    ],
  },
  {
    question: 'A woman of Asian ethnicity has a 0.5x0.3 cm dark node, elevated above the skin, with a smooth surface. Microscopic examination shows dendritic cells with high melanin content. Which type of tumor occurs in this case?',
    answers: [
      {text: 'Blue nevus', correct: true},
      {text: ' Dysplastic nevi', correct: false},
      {text: 'Hybernoma', correct: false},
      {text: 'Lentigo', correct: false},
      {text: 'Hemangioma', correct: false},
    ],
  },
  {
    question: 'Commonest type of pigmented nevus is',
    answers: [
      {text: 'Blue nevus', correct: false},
      {text: 'Compound nevus', correct: true},
      {text: 'Junctional nevus.', correct: false},
      {text: 'Juvenile nevus.', correct: false},
      {text: 'Intradermal nevus', correct: false},
    ],
  },
  {
    question: 'A 46-year-old man has a dark spot on his skin, which began to grow larger and pain appeared. Microscopically: Tumor cells have amphophilic cytoplasm and large pleomorphic nuclei with prominent nucleoli. What type of tumor is there in this case?',
    answers: [
      {text: 'Melanoma', correct: true},
      {text: 'Lentigo', correct: false},
      {text: ' Blue nevus', correct: false},
      {text: 'Dysplastic nevi', correct: false},
      {text: 'Hemangioma', correct: false},
    ],
  },
  {
    question: 'If catabolism is more than anabolism what would it be means?',
    answers: [
      {text: 'increased growth protein synthesis', correct: false},
      {text: 'protein breakdown not change', correct: false},
      {text: 'increased stabilized protein synthesis', correct: false},
      {text: 'positive nitrogen balance', correct: false},
      {text: 'negative nitrogen  balance', correct: true},
    ],
  },
  {
    question: 'Which one of following changes in blood, related to protein metabolism disorders, is commonly risk factor for formation of stones in urinary tract?  ',
    answers: [
      {text: 'uremia', correct: false},
      {text: 'hyperuricemia ', correct: true},
      {text: 'azotemia', correct: false},
      {text: 'paraproteinemia', correct: false},
      {text: 'dysproteinemia', correct: false},
    ],
  },
  {
    question: 'What is the main pathophysiological process underlying the development of atherosclerosis?',
    answers: [
      {text: 'Chronic inflammation in blood vessels', correct: true},
      {text: 'Excessive intake of dietary fiber', correct: false},
      {text: 'nan', correct: false},
      {text: 'Decreased levels of low-density lipoprotein (LDL) cholesterol', correct: false},
      {text: 'Enhanced endothelial function', correct: false},
    ],
  },
  {
    question: 'Concerning lipid metabolism, chylomicrons absorption is damaged through which one of these?',
    answers: [
      {text: 'blood capillary', correct: false},
      {text: 'brush border of enterocytes', correct: false},
      {text: 'bile capillary', correct: false},
      {text: 'lymph capillary', correct: false},
      {text: 'lacteal of villi ', correct: true},
    ],
  },
  {
    question: 'Which of the following statements is true for type 1 diabetes?',
    answers: [
      {text: 'Insulin resistance is the hallmark of the disease pathogenesis', correct: false},
      {text: 'It is insulin dependent diabetes', correct: false},
      {text: 'It is not associated with thyroid disorders', correct: false},
      {text: 'It is an autoimmune disease', correct: true},
      {text: 'nan', correct: false},
    ],
  },
  {
    question: 'Which of the following is not a test for diabetes mellitus?',
    answers: [
      {text: 'Random blood sugar', correct: false},
      {text: 'nan', correct: false},
      {text: 'Fasting blood sugar', correct: false},
      {text: 'D-Xylose test', correct: true},
      {text: 'Fructossamine assay', correct: false},
    ],
  },
];


const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const backButton = document.getElementById('back-btn');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  backButton.innerHTML = 'Back';
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  const questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');
    answerButtons.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  backButton.style.display = 'none';

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('incorrect');
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });
  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = 'Solve Again';
  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener('click', ()=> {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

function handleBackButton() {
  currentQuestionIndex--;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

backButton.addEventListener('click', ()=> {
  if (currentQuestionIndex < questions.length) {
    handleBackButton();
  } else {
    startQuiz();
  }
});

// Add search functionality for custom question navigation
searchButton.addEventListener('click', () => {
  const questionNumber = parseInt(searchInput.value, 10); // Convert input to number
  if (questionNumber > 0 && questionNumber <= questions.length) {
    currentQuestionIndex = questionNumber - 1; // Navigate to the correct question index
    showQuestion(); // Display the selected question
  } else {
    alert('Please enter a valid question number between 1 and ' + questions.length);
  }
});

startQuiz();
