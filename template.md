---
layout: default
title: "Sickada"
banner_header: "Y’all study last minute, and it shows ...."
subtitle: ".... or are there specific times when educational content popularity spikes over the year?"
---

One of our main motivation for this analyis comes from our own experience as students using Youtube. The ability to watch videos that complement lectures and have concepts clearly explained rather than scrolling through endless Wikipedia pages has truly been a game changer. The platform has become an unofficial teaching assistant, guiding us through everything from calculus proofs to developing a website. This got us thinking: are there certain times of the year when educational content becomes even more popular? Maybe during exam seasons, when students worlwide are trying to cram an entire semester’s worth of concepts into a single night. With this analysis, we set out to uncover whether there’s a seasonal rhythm to the upload and consumption of educational content.

## **What is the best time to upload videos**
To be able to differentiate between multiple type of educational content, we classified the videos using BART, a natural language processing model capable of performing sentiment analysis. We used a sample of 50000 "Educational" videos into 3 categories: 'academic', 'edutainement or science popularization' and 'hobby'.

Let's see if there is a seasonality in uploads for academic-type videos

<div>
  <iframe src="assets/plots/academic_videos_per_month_by_year.html" width="100%" height="500" frameborder="0"></iframe>
</div>

By looking at this plot, we could think that there is a peak of uploads in September. This would confirm the idea that academic-type content is most used during the school year, and here particularly at the start of the schoolyear. 

<div style="display: flex; align-items: center; margin-bottom: 1.5rem;">
    <p style="margin-right: 1rem;">
        As this specific pattern could be due to the distribution of the videos per month on the whole dataset.
        To be sure that our distribution is significant, we perform a chi-square goodness of fit test. This tests the null hypothesis that the categorical data has the given frequencies.
    </p>
    <img src="assets/plots/comparison_proportion_video_uploaded_month.png" alt="Website Traffic Growth" width="55%">
</div>
We obtain a p-value of 4.062e-07, strongly rejecting the null hypothesis. However, by analyzing more in details, we notice than this pattern is not present for every year. The peak in September is in fact mostly due to the years 2015, 2017 and 2018. We then performed chi-square the same chi squared test for every year. We obtain that the p-values falling under the threshold of 0.005 are in fact 2015, 2017 and 2018. We then cannot extrapolate that there is a real seasonality for other than the these year.

> *Note: we set the confidence threshold at 0.005 because we perform 10 statistical tests, the propoability of a p-value falling under the threshold of 0.05 is then 10 times higher*

Let's do the same analysis for the edutainment-type videos
<div>
  <iframe src="assets/plots/edutainment_videos_per_month_by_year.html" width="100%" height="500" frameborder="0"></iframe>
</div>
Performing the same tests as for the academic videos, we find that the only year with a different distribution than the original distribution is the year 2018 and the observed peak is in July. These tests allows us to say that there is very little if not seasonality for the edutainment-type videos.

## **What about the famous academic channels**
Analyzing the time series would give us more insight about the viewers's consumption habits. To do this, we can plot the delta views per weeks of a famous youtube channels posting mainly academic-type content. Let's look at Bozeman Science statistics for the year 2018.
<div>
  <iframe src="assets/plots/stats_channel_Bozeman Science_2018.html" width="100%" height="500" frameborder="0"></iframe>
</div>







The data reveals an intriguing contrast: while the number of educational videos uploaded has grown exponentially, their proportion relative to all uploaded content has steadily declined since peaking in the early 2010s. This downward trend in proportion began after 2010, even as the absolute numbers continued to rise, indicating that the overall expansion of content categories on YouTube has far outpaced the growth of educational content. It is important to note that the years 2005, 2006, and 2007 shows a very little number of videos that could affect the statistics. This could be the reason why we see a growing trend in the proportion of videos at the earliest years.

<!-- What about the number of educational channels ? -->
<!-- <div>
  <iframe src="assets/educational_channel_number_proportion_per_year.html" width="100%" height="500" frameborder="0"></iframe>
  <p style="text-align: center;">Figure 1: Dummy Plotly Chart</p>
</div>
This plot highlight a reccuring trend: while the number of educational channels created per year is growing, the proportion of educational channels is decreasing. A particularly striking observation is the sharp decline in both the absolute number and the proportion of educational channels created in 2018, marking a challenging year for the creation of educational content. This could suggests a significant shift in the platform's dynamics or external factors influencing creators’ decisions during this year. -->

>*Note: The year 2019 is not fully accounted for in the dataset, so the absolute number of videos and channels for this year is incomplete and not representative of the full annual trend.*


As said earlier, these are the videos and channels categorized as Educational in the dataset, based on self-definition by the content creator. The term "Educational" can encompass a wide range of interpretations, including content such as children's songs, or tutorials on various subjects which may not align with the more focused educational topics we are specifically interested in analyzing.

## **Academic VS Edutainement**
For this reason, we decided re-classify the videos using BART, a natural language processing model capable of performing sentiment analysis. We asked the model to classify a sample of 50000 "Educational" videos into 3 categories: 'academic', 'edutainement or science popularization' and 'hobby'.
<div>
  <iframe src="assets/proportion_video_type_per_year.html" width="100%" height="500" frameborder="0"></iframe>
  <p style="text-align: center;">Figure 1: Dummy Plotly Chart</p>
</div>

The data reveals a clear shift in the type of educational content on YouTube, with a decline in academic videos and a rise in edutainment content over time. Between 2008 and 2013, there is a noticeable increase in edutainment videos, signaling its growing popularity during the early years of YouTube. This early rise in popularity could reflect the novelty of the platform and the unmet demand for new and accessible educational content. We see that academic videos became less and less popular reaching a plateau at around 2011. We could argue that youtube introduced a new type of educational content that is easier to consume and fits YouTube’s informal and entertainment-focused culture better. The transition from academic to edutainment content reflects changing consumer preferences. Viewers on YouTube may prefer content that simplifies complex topics, incorporates storytelling, and uses visuals and humor to maintain engagement.

Fitting an OLS to the data videos shows that there is a statistically significant relationship between the porportion of academic or edutainement videos and the year. Here are the important results :

| Type      | R²   | p-value | Slope |
|-----------|------|---------|-------|
| Academic | 0.733 | 0.000188 | -0.0185 |
| Edutainement | 0.792 | 4.63e-05 | 0.0174 |

We see that following this model, there is a 1.85% decrease of academic videos per year and a 1.74% increse of edutainement videos per year.

## **What did we learn**
We learned that YouTube's educational content has changed a lot over the years. While the number of videos and channels has grown, their share of total content has decreased as the platform expanded into other. We also see a shift from academic videos to edutainment. Viewers seem to prefer content that is easier to understand, fun, and engaging. This shows how YouTube has adapted to meet changing audience preferences, making education more accessible and entertaining.


## **Test**
<div>
  <iframe src="assets/proportion_video_type_per_year.html" width="100%" height="500" frameborder="0"></iframe>
  <p style="text-align: center;">Figure 1: Dummy Plotly Chart</p>
</div>

<div style="display: flex; align-items: center; margin-bottom: 2rem;">
  <!-- Plot -->
  <div style="flex: 1; margin-right: 1rem;">
    <iframe src="assets/proportion_video_type_per_year.html" width="100%" height="500" frameborder="0"></iframe>
  </div>
  <!-- Text -->
  <div style="flex: 1;">
    <h3>Insights</h3>
    <p>
      This Plotly chart highlights the performance of various categories over time. Use it to analyze trends and identify key areas for improvement or further study.
    </p>
    <p>
      The data indicates significant growth in Q3, with certain categories outperforming others due to targeted strategies.
    </p>
  </div>
</div>

## **Introduction**
> A brief introduction explaining the purpose of the analysis and the key questions being explored. Keep it simple, clear, and engaging.

**Example:**
*Have you ever wondered why sales spike during certain months? This report uncovers trends, patterns, and insights from our latest dataset.*

---

## **Key Findings**
### **Top Insights:**
- **Sales Growth:** Sales increased by **25%** in Q3 compared to Q2.
- **Product Performance:** **Product A** outperformed others in urban markets.
- **Web Traffic:** Website traffic surged following the new marketing campaign.

> Use **bold text** for key points and *italics* for clarifications.

---

## **Visual Insights**
### **Centered Image**
![Sales Trends Chart](assets/banner.jpeg)
> *Figure 1: Sales trends across quarters.*

---

### **Image with Text Alignment**
#### Image to the Left
<div style="display: flex; align-items: center; margin-bottom: 1.5rem;">
    <img src="assets/profile.jpeg" alt="Urban Market Performance" width="40%" style="margin-right: 1rem;">
    <p>
        **Observation:** *Product A demonstrated remarkable performance in urban markets during the campaign. This suggests a need to further target similar demographics for sustained growth.*
    </p>
</div>

---

#### Image to the Right
<div style="display: flex; align-items: center; margin-bottom: 1.5rem;">
    <p style="margin-right: 1rem;">
        **Insight:** *Website traffic surged after the new campaign launch, highlighting strong audience engagement. Future campaigns can capitalize on this trend to drive conversions.*
    </p>
    <img src="assets/profile.jpeg" alt="Website Traffic Growth" width="40%">
</div>

---

## **Deep Dive Analysis**
Break down each key finding with deeper analysis, supported by visuals and data tables.

### **Sales Analysis**
- **Observation:** The highest sales occurred in **July**, driven by a summer promotion.
- **Details:** The promotion contributed to a **50% growth rate** in sales.

| Month      | Sales ($)   | Growth Rate |
|------------|-------------|-------------|
| June       | 10,000      | +5%         |
| July       | 15,000      | +50%        |
| August     | 12,000      | -20%        |

> *July's promotion was highly successful, but August showed a decline, indicating the need for follow-up strategies.*

---

## **Interactive Plotly Visualization**
Below is an interactive Plotly chart embedded directly into this Markdown file using HTML:

<div>
  <iframe src="assets/plot.html" width="100%" height="500" frameborder="0"></iframe>
  <p style="text-align: center;">Figure 1: Dummy Plotly Chart</p>
</div>

### **Plotly Chart with Text on the Right**
<div style="display: flex; align-items: center; margin-bottom: 2rem;">
  <!-- Plot -->
  <div style="flex: 1; margin-right: 1rem;">
    <iframe src="assets/plot.html" width="100%" height="500" frameborder="0"></iframe>
  </div>
  <!-- Text -->
  <div style="flex: 1;">
    <h3>Insights</h3>
    <p>
      This Plotly chart highlights the performance of various categories over time. Use it to analyze trends and identify key areas for improvement or further study.
    </p>
    <p>
      The data indicates significant growth in Q3, with certain categories outperforming others due to targeted strategies.
    </p>
  </div>
</div>

---

### **Plotly Chart with Text on the Left**
<div style="display: flex; align-items: center; margin-bottom: 2rem;">
  <!-- Text -->
  <div style="flex: 1; margin-right: 1rem;">
    <h3>Analysis</h3>
    <p>
      This visualization compares multiple metrics across different months. It reveals seasonal trends and helps in understanding variations in performance across quarters.
    </p>
    <p>
      The results emphasize the importance of summer promotions and their impact on overall sales growth.
    </p>
  </div>
  <!-- Plot -->
  <div style="flex: 1;">
    <iframe src="assets/plot.html" width="100%" height="500" frameborder="0"></iframe>
  </div>
</div>

---

## **Embedded Videos**
You can embed videos directly into your report using HTML. For example:

### **Marketing Campaign Video**
<div style="text-align: center;">
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/tiEPzEp2T4A"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>
<p style="text-align: center;">Figure 3: Overview of our marketing campaign strategy.</p>

---

## **Conclusions**
> *In summary, our analysis shows that targeted promotions in urban areas drive significant sales growth. However, maintaining momentum after campaigns remains a challenge.*

---

## **Next Steps and Recommendations**
### **Actionable Recommendations:**
1. Launch a **follow-up campaign** in **August** to sustain sales momentum.
2. Focus on urban markets for **Product A**, as they demonstrate the highest potential.
3. Leverage website analytics to identify trends and optimize future marketing campaigns.

---

## **Additional Notes**
- **Dataset:** [View Dataset](https://github.com/epfl-dlab/YouNiverse)
- **Tools Used:** *Python, pandas, Matplotlib*
- **References:** Internal sales records and web traffic data.

---

*Thank you for reading! Feel free to reach out for further information or collaboration opportunities.*
